import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api/accounts/'; // Update this URL if needed

  constructor(private http: HttpClient) {}

  // Method for user registration
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}register/`, user);
  }

  // Method for user login
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}login/`, credentials);
  }
}