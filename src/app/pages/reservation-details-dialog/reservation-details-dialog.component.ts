import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Reservation } from '../../Models/reservation.model';
import { ReservationService } from '../../_services/reservation.service';
import { Router } from '@angular/router';
import { Statut } from '../../Models/statut';

@Component({
  selector: 'app-reservation-details-dialog',
  templateUrl: './reservation-details-dialog.component.html',
  styleUrl: './reservation-details-dialog.component.css'
})
export class ReservationDetailsDialogComponent {

  constructor(private router: Router, private reservationService: ReservationService,
    public dialogRef: MatDialogRef<ReservationDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { reservation: Reservation }
  ) { }

  OnDelete(id?: number): void {

    this.reservationService.deleteReservation(id).subscribe();
    this.router.navigate(['/reservation']);

  }

  changeStatus(): void {
    if (this.data.reservation.statut == Statut.NONCONFIRMED) {
      this.data.reservation.statut = Statut.CONFIRMED;
    }
    else {
      this.data.reservation.statut = Statut.NONCONFIRMED;
    }
    
    this.dialogRef.close({ reservation: this.data.reservation }); // Emitting the result here  }
  }

}