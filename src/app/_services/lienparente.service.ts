import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LienParente } from '../Models/lien-parente.model';

@Injectable({
  providedIn: 'root'
})
export class LienParenteService {
  private apiUrl = 'http://localhost:8080/lienParentes'; // Replace 'your-api-url' with your actual API URL

  constructor(private http: HttpClient) { }

  getParasoles(): Observable<LienParente[]> {
    return this.http.get<LienParente[]>(`${this.apiUrl}/getall`);
  }

  getParasole(id: number): Observable<LienParente> {
    return this.http.get<LienParente>(`${this.apiUrl}/get/${id}`);
  }

  createLienParente(lienParente: LienParente): Observable<LienParente> {
    return this.http.post<LienParente>(`${this.apiUrl}/add/`, lienParente);
  }

  deleteParasole(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
