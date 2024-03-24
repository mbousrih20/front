import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pays } from '../Models/pays.model';

@Injectable({
  providedIn: 'root'
})
export class PaysService {
  private apiUrl = 'http://localhost:8080/pays'; // Replace 'your-api-url' with your actual API URL

  constructor(private http: HttpClient) { }

  getAllPays(): Observable<Pays[]> {
    return this.http.get<Pays[]>(`${this.apiUrl}/getall`);
  }

  getPays(id: number): Observable<Pays> {
    return this.http.get<Pays>(`${this.apiUrl}/get/${id}`);
  }

  createPays(pays: Pays): Observable<Pays> {
    return this.http.post<Pays>(`${this.apiUrl}/add`, pays);
  }

  deletePays(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
