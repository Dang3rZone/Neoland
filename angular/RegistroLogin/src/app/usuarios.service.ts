import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://registrate.ngrok.io';
  }

  getPremio() {
    // user-token
    const httpOptions = {
      headers: new HttpHeaders({
        'user-token': 'ZXASASDAXMSALAS:;AXC:;MASDO'
      })
    }
    return this.httpClient.get(`${this.baseUrl}/premio`, httpOptions).toPromise();
  }

  registro(formValue) {
    return this.httpClient.post(`${this.baseUrl}/register`, formValue).toPromise();
  }

  login(formValue) {
    return this.httpClient.post(`${this.baseUrl}/login`, formValue).toPromise();
  }

}
