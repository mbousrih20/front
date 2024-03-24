import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facture } from '../Models/facture.model';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private apiUrl = 'http://localhost:8080/factures'; // Replace 'your-api-url' with your actual API URL

  constructor(private http: HttpClient) { }

  getParasoles(): Observable<Facture[]> {
    return this.http.get<Facture[]>(`${this.apiUrl}/getall`);
  }

  getParasole(id: number): Observable<Facture> {
    return this.http.get<Facture>(`${this.apiUrl}/get/${id}`);
  }

  createParasole(facture: Facture): Observable<Facture> {
    return this.http.post<Facture>(`${this.apiUrl}/add`, facture);
  }

  deleteParasole(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}