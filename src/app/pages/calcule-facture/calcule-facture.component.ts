import { Component, Inject } from '@angular/core';
import { Facture } from '../../Models/facture.model';
import { ReservationService } from '../../_services/reservation.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Reservation } from '../../Models/reservation.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calcule-facture',
  standalone: true,
  imports: [],
  templateUrl: './calcule-facture.component.html',
  styleUrl: './calcule-facture.component.css'
})
export class CalculeFactureComponent {
facture : Facture = new Facture();
constructor(private router: Router,private reservationService: ReservationService,
  public dialogRef: MatDialogRef<CalculeFactureComponent>,
  @Inject(MAT_DIALOG_DATA) public data: { reservation : Reservation }
) {  this.reservationService.calculMontant(this.data.reservation).subscribe(facture => {
  this.facture = facture;
});}

onConfirm(): void {
  this.data.reservation.facture = this.facture;
  this.reservationService.createReservation(this.data.reservation).subscribe({
    next: data => {
      console.log(data);
      this.dialogRef.close();
      this.router.navigate(['/reservation']);
    }
  });
}
onCancel() : void {
  this.dialogRef.close();
}
}
