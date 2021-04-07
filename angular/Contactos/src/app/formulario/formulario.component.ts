import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contacto } from '../contacto.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  // 1 - Definición del Output
  @Output() creaContacto: EventEmitter<Contacto>;

  nuevoContacto: Contacto;

  constructor() {
    this.nuevoContacto = {};
    // 2 - Inicialización del Output
    this.creaContacto = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick() {
    // 3 - emitimos el dato
    console.log(this.nuevoContacto);
    this.creaContacto.emit(this.nuevoContacto);
    this.nuevoContacto = {};
  }

}