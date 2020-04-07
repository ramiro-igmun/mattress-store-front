import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../dtos/item';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private REST_API_SERVER = "http://localhost:3001/";

  constructor(private http: HttpClient) { }

  getAll(endPoint: string) {
    return this.http.get(`${this.REST_API_SERVER}${endPoint}`);
  }

  getById(endPoint: string): Observable<any> {
    return this.http.get(`${this.REST_API_SERVER}${endPoint}`);
  }

  deleteById(endPoint: string) {
    return this.http.delete(`${this.REST_API_SERVER}${endPoint}`)
  }

  modifyById(endPoint: string, modifiedItem: Item): Observable<any> {
    return this.http.put(`${this.REST_API_SERVER}${endPoint}`, JSON.stringify(modifiedItem), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
  }

}
