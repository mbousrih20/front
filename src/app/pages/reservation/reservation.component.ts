import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../Models/reservation.model';
import { ReservationService } from '../../_services/reservation.service';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservations: Reservation[] = [];
  clientId: number | null = null;

  constructor(
    private reservationService: ReservationService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const clientId = localStorage.getItem('clientId');
    if (clientId) {
      this.clientId = parseInt(clientId, 10);
      this.loadReservations();
    } else {
      console.error('ID du client non disponible');
    }
  }

  loadReservations() {
    if (this.clientId !== null) {
      this.reservationService.getReservationByClient(this.clientId).subscribe(reservations => {
        this.reservations = reservations;
      });
    } else {
      console.error('ID du client non défini');
    }
  }
  OnDelete(id? : number): void {

      this.reservationService.deleteReservation(id).subscribe();
      this.reloadPage();
  
} 
reloadPage(): void {
  window.location.reload();
}

}
