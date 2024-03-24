import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Concession } from '../Models/Concession';

@Injectable({
  providedIn: 'root'
})
export class ConcessionService {
  private apiUrl = 'http://localhost:8080/Concession'; // Replace 'your-api-url' with your actual API URL

  constructor(private http: HttpClient) { }

  getAllConcession(): Observable<Concession[]> {
    return this.http.get<Concession[]>(`${this.apiUrl}/getall`);
  }

  GetConcessionByConsionnaireId(id : number) : Observable<Concession> {
    return this.http.get<Concession>(`${this.apiUrl}/GetConcessionByConsionnaireId/${id}`);
  }

  deleteParasole(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
