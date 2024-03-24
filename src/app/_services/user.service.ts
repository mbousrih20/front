import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getClientBoard(): Observable<any> {
    return this.http.get(API_URL + 'client', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  forgetpassword(email: string): Observable<any> {
    const body = { email: email };
    return this.http.post('http://localhost:8080/api/auth/forgetpassword', body);
  }

  resetpassword(token: any, password: any): Observable<any>
  { return this.http.put('http://localhost:8080/api/auth/resetpassword', {token, password});}
}
