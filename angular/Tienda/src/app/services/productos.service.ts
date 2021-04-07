import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ppid } from 'process';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://neolandshop.ngrok.io/items';
  }

  getAll() {
    return this.httpClient.get(this.baseUrl).toPromise();
  }

  getCategorias() {
    return this.httpClient.get(this.baseUrl + '/categorias').toPromise();
  }

  getByCategoria(pCategoria: string) {
    return this.httpClient.get(`${this.baseUrl}/${pCategoria}`).toPromise();
  }

  createCart() {
    return this.httpClient.post(`${this.baseUrl}/newcart`, {}).toPromise();
  }

  addProduct(pProductId) {
    const body = {
      item_id: pProductId
    }

    return this.httpClient.post(`${this.baseUrl}/new`, body, this.createHeaders()).toPromise();
  }

  getCart() {
    return this.httpClient.get(`${this.baseUrl}/cart`, this.createHeaders()).toPromise();
  }

  removeProduct(pProductId: number) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${pProductId}`, this.createHeaders()).toPromise();
  }

  getById(pProductId: number) {
    return this.httpClient.get(`${this.baseUrl}/id/${pProductId}`).toPromise();
  }

  createHeaders() {
    return {
      headers: new HttpHeaders({
        'cart-token': localStorage.getItem('carrito_id')
      })
    }
  }

}
