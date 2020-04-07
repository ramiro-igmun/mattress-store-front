import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private REST_API_SERVER = "http://localhost:3001/";

  constructor(private http: HttpClient) { }

  async login(email: string, password: string) {
    try {
      const res = await this.http.post(`${this.REST_API_SERVER}login`, { email, password }).toPromise();
      this.setSession(res);
      return res;
    } catch (err) {
      alert(err.error.error);
    }
  }

  private setSession(authResult) {
    const token = authResult.token;
    if (token) {
      localStorage.setItem('token', token);
      console.log(token);
    }
  }

  logout() {
    localStorage.removeItem('token');
  }
}
