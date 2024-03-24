import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipement } from '../Models/equipement.model';

@Injectable({
  providedIn: 'root'
})
export class EquipementService {
  private apiUrl = 'http://localhost:8080/equipements'; // Replace 'your-api-url' with your actual API URL

  constructor(private http: HttpClient) { }

  getEquipements(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(`${this.apiUrl}/getall`);
  }

  getEquipement(id: number): Observable<Equipement> {
    return this.http.get<Equipement>(`${this.apiUrl}/get/${id}`);
  }

  createEquipement(equipement: Equipement): Observable<Equipement> {
    return this.http.post<Equipement>(`${this.apiUrl}/add`, equipement);
  }

  deleteEquipement(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
