import { Component, OnInit } from '@angular/core';
import { Persona, PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  listaPersonas: Persona[];
  mostrarActivos: boolean;

  // ¡¡Si necesito utilizar un SERVICIO hay que INYECTARLO!!
  constructor(private personasService: PersonasService) {
    this.mostrarActivos = false;
  }

  // ngOnInit() {
  //   this.personasService.getAll()
  //     .then(arrPersonas => {
  //       this.listaPersonas = arrPersonas;

  //     })
  //     .catch(error => console.log(error));
  // }

  async ngOnInit() {
    this.listaPersonas = await this.personasService.getAll();
  }

  // TAREA: Crear un botón. Cuando hagamos click en el botón, y mostrarlas en el HTML
  async onClick() {
    if (this.mostrarActivos) {
      this.listaPersonas = await this.personasService.getAll();
    } else {
      this.listaPersonas = await this.personasService.getActivos();
    }
    this.mostrarActivos = !this.mostrarActivos;
  }

  // TAREA 2: Botón que recupere los menores de 30 años
  async onClickMenores30() {
    this.listaPersonas = await this.personasService.getMenores30()
  }

  async onChange($event) {
    this.listaPersonas = await this.personasService.getMenoresEdad($event.target.value);
  }

}