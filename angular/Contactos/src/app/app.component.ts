import { Component } from '@angular/core';
import { Contacto } from './contacto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrContactos: Contacto[];

  constructor() {
    this.arrContactos = [];
  }

  onCreaContacto($event) {
    this.arrContactos.push($event);
    console.log(this.arrContactos);
  }

}
