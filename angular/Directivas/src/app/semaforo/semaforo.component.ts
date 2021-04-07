import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  colorSeleccionado: string;

  constructor() {
    this.colorSeleccionado = 'amarillo'; // rojo, verde
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.colorSeleccionado === 'rojo') {
        this.colorSeleccionado = 'amarillo';
      } else if (this.colorSeleccionado === 'amarillo') {
        this.colorSeleccionado = 'verde';
      } else if (this.colorSeleccionado === 'verde') {
        this.colorSeleccionado = 'rojo';
      }
    }, 1000);
  }

  onClick() {
  }

}
