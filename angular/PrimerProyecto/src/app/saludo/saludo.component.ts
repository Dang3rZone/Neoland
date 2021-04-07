import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  nombre: string;
  identificador: string;

  imagen: string;

  constructor() {
    this.nombre = 'Mario';
    this.identificador = 'parrafoPrincipal';
    this.imagen = 'https://www.comedera.com/wp-content/uploads/2014/02/paella-de-mariscos-700x400.jpg';
    setTimeout(() => {
      this.nombre = 'Rafa';
      this.identificador = 'OtroIdentificador';
      this.imagen = 'https://www.recetasderechupete.com/wp-content/uploads/2017/11/Cachopo.jpg?width=1200&enable=upscale';
    }, 3000);
  }

  crearSaludo(): string {
    return 'Saludo desde función';
  }

  ngOnInit(): void {
  }

  onClick($event) {
    $event.target.style.backgroundColor = 'red';
  }

  onInput($event) {
    this.nombre = $event.target.value;
  }

}
