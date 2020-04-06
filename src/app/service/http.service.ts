import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private REST_API_SERVER = "http://localhost:3001/";

  constructor(private http: HttpClient) { }

  myMethod(baseURL: string) {
    return this.http.get(`${this.REST_API_SERVER}${baseURL}`);
  }
}
