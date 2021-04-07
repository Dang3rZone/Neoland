import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  baseUrl: string;

  // Inyecto HttpClient porque voy a lanzar peticiones HTTP
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://randomnum.ngrok.io/random/num';
  }

  getNumAleatorio(pMin = 1, pMax = 100) {
    // Definir las cabeceras de la petición
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'lilililolololalala'
      })
    }

    const body = {
      max: pMax,
      min: pMin
    }

    return this.httpClient.post(this.baseUrl, body, httpOptions).toPromise();
  }

}
