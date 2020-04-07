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
    const token = localStorage.getItem('token');
    const authorizationHeader: HttpHeaders = new HttpHeaders({ 'Authorization': `bearer ${token}` });
    return this.http.delete(`${this.REST_API_SERVER}${endPoint}`, { headers: authorizationHeader })
  }

  modifyById(endPoint: string, modifiedItem: Item): Observable<any> {
    const token = localStorage.getItem('token');
    const jsonAndAuthoHeader: HttpHeaders = new HttpHeaders({ 'Authorization': `bearer ${token}`, 'Content-Type': 'application/json' });
    return this.http.put(`${this.REST_API_SERVER}${endPoint}`, JSON.stringify(modifiedItem), { headers: jsonAndAuthoHeader })
  }

}
