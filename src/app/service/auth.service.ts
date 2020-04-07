import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private REST_API_SERVER = "http://localhost:3001/";

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(`${this.REST_API_SERVER}login`, { email, password })
      .subscribe(res => this.setSession(res));
  }

  private setSession(authResult) {
    localStorage.setItem('token',authResult.token);
    console.log(localStorage.getItem('token'));
  }

  logout() {
    localStorage.removeItem('token');
  }
}
