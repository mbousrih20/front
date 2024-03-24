import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../Models/client.model';
import { User } from '../Models/user.model';
import { ERole } from '../Models/ERole';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:8080/api/auth'; // Replace 'your-api-url' with your actual API URL

  constructor(private http: HttpClient) { }

  getParasoles(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/getall`);
  }

  getParasole(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/get/${id}`);
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}/api/auth/signup`, client);
  }

  deleteParasole(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
  getUser(id : any): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/getuser/${id}`);
  }
  getAllUsers(nom : ERole) : Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/getallUser/${nom}`) ;
  }
}
