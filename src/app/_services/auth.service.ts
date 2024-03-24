import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../Models/client.model';
import { User } from '../Models/user.model';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }
  storeClientId(clientId: number): void {
    localStorage.setItem('clientId', clientId.toString());
  }
  register(client : Client): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      client,
      httpOptions
    );
  }
  

  logout(username: any): Observable<any> {
    return this.http.post(AUTH_API + 'signout/' + username, { }, httpOptions);
  }

  refreshToken() {
    return this.http.post(AUTH_API + 'refreshtoken', { }, httpOptions);
  }
}
