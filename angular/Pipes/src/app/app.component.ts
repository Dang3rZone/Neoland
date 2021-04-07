import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numero: number;
  precio: number;
  fechaActual: Date;
  numAleatorio: number;
  cadena: string;
  animales: string[];

  inicio: number;
  fin: number;

  prom: Promise<any>;

  constructor(private httpClient: HttpClient) {
    this.numero = 543.1292324;
    this.precio = 320.99;
    this.fechaActual = new Date();
    setInterval(() => {
      this.fechaActual = new Date();
    }, 1000);
    this.numAleatorio = Math.random();
    this.cadena = 'En un Lugar de La Mancha';
    this.animales = ['perro', 'gato', 'pájaro', 'koala', 'wombat', 'ñu', 'cui', 'kiwi'];
    this.inicio = 0;
    this.fin = this.animales.length;

    this.prom = this.httpClient.get('https://jsonplaceholder.typicode.com/posts').toPromise();
  }

  onChange($event) {
    if ($event.target.id === 'rangeInicio') {
      this.inicio = $event.target.value;
    } else {
      this.fin = $event.target.value;
    }
  }

}
