import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  campoTexto: string;

  numero: number;

  constructor() {
    this.numero = 0;
  }

  onClick() {
    this.numero = parseInt(this.campoTexto);
  }

  onInput($event) {
    this.campoTexto = $event.target.value;
  }

}
