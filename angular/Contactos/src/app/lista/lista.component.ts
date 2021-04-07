import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Contacto } from '../contacto.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() contactos: Contacto[];

  constructor() { }

  ngOnInit(): void {
  }

  // Método que recorra el array contactos y construya el HTML que queremos mostrar.
  // <ul><li>Rosa - 9919219- rosa@email.com<li><li></li></ul>
  // retorna todo el string con el html
  // En el HTML llamamos a esta función
  mostrarContactos() {
    let resultado = '<ul>';

    // for (let i = 0; i < this.contactos.length; i++) {
    //   resultado += `<li>${this.contactos[i].nombre}</li>`;
    // }

    // for (let contacto of this.contactos) {
    //   resultado += `<li>${contacto.nombre} - ${contacto.email}</li>`;
    // }

    this.contactos.forEach(contacto => {
      resultado += `<li>${contacto.nombre} - ${contacto.email}</li>`;
    })

    resultado += '</ul>';
    return resultado;
  }

}