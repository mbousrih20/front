import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../Models/reservation.model';
import { Facture } from '../Models/facture.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:8080/reservations'; // Replace 'your-api-url' with your actual API URL

  constructor(private http: HttpClient) { }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/getall`);
  }

  getParasole(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/get/${id}`);
  }

  createReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiUrl}/add/`, reservation ,httpOptions);
  }

  deleteReservation(id?: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
  getReservationByClient(clientId : number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/getbyclient/${clientId}`);
  }

  calculMontant(reservation : Reservation): Observable<Facture> {
    return this.http.post<Facture>(`${this.apiUrl}/calculMontant`, reservation ,httpOptions);
  }
  getbydatedebut(date : Date): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/getbydatedebut/${date}`);
  }
  update(reservation : Reservation) :  Observable<Reservation> {
    return this.http.put<Reservation>(`${this.apiUrl}/update/`,reservation,httpOptions);
  }
}
