import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private REST_API_SERVER = "http://localhost:3001/";

  constructor(private http: HttpClient) { }

  getAll(endPoint: string) {
    return this.http.get(`${this.REST_API_SERVER}${endPoint}`);
  }

  getOne(endPoint: string) {
    return this.http.get(`${this.REST_API_SERVER}${endPoint}`);
  }

  deleteOne(endPoint: string) {
    return this.http.delete(`${this.REST_API_SERVER}${endPoint}`)
  }
}
