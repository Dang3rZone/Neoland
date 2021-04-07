import { Component } from '@angular/core';
import { Persona } from './persona.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  texto: string;

  inputNombre: string;
  inputApellidos: string;
  inputDireccion: string;
  inputEmail: string;

  persona: Persona;

  constructor() {
    this.texto = 'Valor inicial';
    this.persona = {};
  }

  onClick() {
    this.texto = 'Valor al hacer click';
  }

  onClickFormulario() {
    console.log(this.inputNombre, this.inputApellidos, this.inputDireccion, this.inputEmail);
  }

  onClickFormularioObj() {
    console.log(this.persona);
  }

}


