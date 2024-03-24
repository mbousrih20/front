import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parasole } from '../Models/parasole.model';

@Injectable({
  providedIn: 'root'
})
export class ParasoleService {
  private apiUrl = 'http://localhost:8080/parasoles'; // Replace 'your-api-url' with your actual API URL

  constructor(private http: HttpClient) { }

  getParasoles(): Observable<Parasole[]> {
    return this.http.get<Parasole[]>(`${this.apiUrl}/getall`);
  }

  getParasole(id: number): Observable<Parasole> {
    return this.http.get<Parasole>(`${this.apiUrl}/get/${id}`);
  }

  createParasole(parasole: Parasole): Observable<Parasole> {
    return this.http.post<Parasole>(`${this.apiUrl}/add`, parasole);
  }

  deleteParasole(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
  getParasoleByFileId(fileId : any ) : Observable<Parasole[]> {
    return this.http.get<Parasole[]>(`${this.apiUrl}/getParasoleByFileId/${fileId}`);
  }
}
