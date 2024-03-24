import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { File } from '../Models/file.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private apiUrl = 'http://localhost:8080/files'; // Replace 'your-api-url' with your actual API URL

  constructor(private http: HttpClient) { }

  getFiles(): Observable<File[]> {
    return this.http.get<File[]>(`${this.apiUrl}/getall`);
  }
  getFilesByConcessionId(id : number): Observable<File[]> {
    return this.http.get<File[]>(`${this.apiUrl}/getFilesbyConcessionId/${id}`);
  }
  getParasole(id: number): Observable<File> {
    return this.http.get<File>(`${this.apiUrl}/get/${id}`);
  }

  createParasole(file: File): Observable<File> {
    return this.http.post<File>(`${this.apiUrl}/add`, file);
  }

  deleteParasole(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
