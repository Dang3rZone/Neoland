import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Cliente {
  nombre: string;
  apellidos: string;
  edad: number;
  email: string;
  cuota: number;
  dni: string;
  sexo: string;
  direccion: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/clientes';
  }

  getAll(): Promise<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.baseUrl, this.createHeaders()).toPromise();
  }

  insert(formValues) {
    return this.httpClient.post(this.baseUrl, formValues, this.createHeaders()).toPromise();
  }

  createHeaders() {
    return {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem('token_gym')
      })
    }
  }

}