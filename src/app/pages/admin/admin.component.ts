import { Parasole } from '../../Models/parasole.model';
import { CommonModule } from '@angular/common';
import { File } from '../../Models/file.model';
import { ReservationParasole } from '../../Models/reservation-parasole.model';
import { Reservation } from '../../Models/reservation.model';
import { Statut } from '../../Models/statut';
import { Facture } from '../../Models/facture.model';
import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { formatDate } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ParasoleDialogComponent } from '../parasole-dialog/parasole-dialog.component';
import { User } from '../../Models/user.model';
import { Concession } from '../../Models/Concession';
import { TypeEquipement } from '../../Models/type-equipement';
import { ReservationService } from '../../_services/reservation.service';
import { FileService } from '../../_services/file.service';
import { StorageService } from '../../_services/storage.service';
import { ConcessionService } from '../../_services/Concession.service';
import { ParasoleService } from '../../_services/parasole.service';
import { switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { ReservationDetailsDialogComponent } from '../reservation-details-dialog/reservation-details-dialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})

export class AdminComponent {
  files: File[] = [];
  concession: Concession = new Concession();
  selectedConcession: number | null = null;
  parasolMap: any[][] = [];
  reservations: Reservation[] = [];
  selectedDate: Date = new Date();

  onDateChange() {
    this.loadReservations();
  }
  constructor(private router: Router, private dialog: MatDialog, private reservationService: ReservationService, private parasoleService: ParasoleService, private concessionService: ConcessionService, private fileService: FileService, private storageService: StorageService) {
    this.loadParasol();
  }

  // Fonction pour charger les parasols de chaque fille et les organiser dans une grille
  loadParasol() {
    const clientId = localStorage.getItem('clientId');
    if (clientId) {
      this.concessionService.GetConcessionByConsionnaireId(parseInt(clientId, 10))
        .pipe(
          switchMap(concession => {
            this.concession = concession;
            if (this.concession.id != null) { }
            return this.fileService.getFilesByConcessionId(this.concession.id || 0);
          }),
          switchMap(files => {
            this.files = files;
            const observables = files.map(file => this.parasoleService.getParasoleByFileId(file.id));
            return forkJoin(observables);
          })
        )
        .subscribe(parasolsArrays => {
          parasolsArrays.forEach((parasols, i) => {
            this.parasolMap[i] = [];
            for (let j = 0; j < 36; j++) {
              if (parasols[j]) {
                this.parasolMap[i][j] = parasols[j];
              } else {
                this.parasolMap[i][j] = null;
              }
            }
          });
        });
    }
  }
  loadReservations() {
    this.reservationService.getbydatedebut(this.selectedDate).subscribe(reservations => {
      this.reservations = reservations;
    });
  }

  isConfirmed(rowIndex: number, colIndex: number): boolean {
    const parasolId = this.parasolMap[rowIndex][colIndex]?.id;
    return this.reservations.some(reservation =>
      reservation.reservationParasoles?.some(reservationParasole =>
        reservationParasole.parasole?.id === parasolId &&
        reservation.statut === Statut.CONFIRMED
      )
    );
  }

  findReservation(rowIndex: number, colIndex: number): any {
    for (const reservation of this.reservations) {
      if (reservation.reservationParasoles != null) {
        for (const reservationParasole of reservation.reservationParasoles) {
          if (reservationParasole.parasole?.id === this.parasolMap[rowIndex][colIndex]?.id) {
            return reservation;
          }
        }
      }
      return null;
    }
  }

  isNonConfirmed(rowIndex: number, colIndex: number): boolean {
    const parasolId = this.parasolMap[rowIndex][colIndex]?.id;
    return this.reservations.some(reservation =>
      reservation.reservationParasoles?.some(reservationParasole =>
        reservationParasole.parasole?.id === parasolId &&
        reservation.statut === Statut.NONCONFIRMED
      )
    );
  }

  showReservationDetails(rowIndex: number, colIndex: number) {
    let reservation = this.findReservation(rowIndex, colIndex);
    if (reservation) {
      const dialogRef = this.dialog.open(ReservationDetailsDialogComponent, {
        width: '700px',
        data: { reservation }
      });

      dialogRef.afterClosed().subscribe(result => {
        reservation = result.reservation;
        this.reservationService.update(reservation).subscribe();
      });

    }
    else {
      console.log('Aucune réservation trouvée pour cette parasol.');
    }
  }
}

