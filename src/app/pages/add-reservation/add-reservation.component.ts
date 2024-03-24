import { Component } from '@angular/core';
import { Reservation } from '../../Models/reservation.model';
import { ParasoleService } from '../../_services/parasole.service';
import { Parasole } from '../../Models/parasole.model';
import { Observable, empty } from 'rxjs';
import { ReservationService } from '../../_services/reservation.service';
import { FileService } from '../../_services/file.service';
import { File } from '../../Models/file.model';
import { User } from '../../Models/user.model';
import { StorageService } from '../../_services/storage.service';
import { Statut } from '../../Models/statut';
import { Concession } from '../../Models/Concession';
import { ConcessionService } from '../../_services/Concession.service';
import { ReservationParasole } from '../../Models/reservation-parasole.model';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddReservationParasoleDialogComponentComponent } from '../add-reservation-parasole-dialog-component/add-reservation-parasole-dialog-component.component';
import { TypeEquipement } from '../../Models/type-equipement';
import { CalculeFactureComponent } from '../calcule-facture/calcule-facture.component';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent {
  reservation: Reservation = new Reservation();

public TypeEquipement = TypeEquipement;


  reservationsParasoles: ReservationParasole[] = [];
  
  selectedConcession: number | null = null;
  concessions$: Observable<Concession[]>;
 
  files: File[] = [];
  errorMessage = '';

  constructor(private router: Router,private dialog: MatDialog, private reservationService: ReservationService, private fileService: FileService,private storageService : StorageService,private concessionService : ConcessionService) {
    this.concessions$ = this.concessionService.getAllConcession();
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddReservationParasoleDialogComponentComponent, {
      width: '400px', // Définissez la largeur de votre dialogue
      data: { files : this.files } // Envoyez les parasols à votre dialogue
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.reservationsParasoles.push(result);
        console.log(this.reservationsParasoles);
      }
    });
  }
  openFactureDialog(): void {
    this.reservation.reservationParasoles = this.reservationsParasoles;
    const clientId = localStorage.getItem('clientId');
    if (clientId) {
      const client = new User();
    client.id = parseInt(clientId, 10); 
    this.reservation.client = client;
    } else {
      console.error('ID du client non disponible');
    }
    this.reservation.statut = Statut.NONCONFIRMED ;
    const dialogRef = this.dialog.open(CalculeFactureComponent, {
      width: '600px', // Définissez la largeur de votre dialogue
      data: { reservation : this.reservation } // Envoyez les parasols à votre dialogue
    });
  }
  removeReservationParasole(index: number) {
    this.reservationsParasoles.splice(index, 1);
  }
  onConcessionSelected(): void {
    if (this.selectedConcession) {
      this.fileService.getFilesByConcessionId(this.selectedConcession).subscribe(files => {
        this.files = files;
      });
    } else {
      this.files = [];
    }
  }
}
