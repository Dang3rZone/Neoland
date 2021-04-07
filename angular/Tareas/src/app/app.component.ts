import { Component } from '@angular/core';
import { Tarea } from './tarea.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrTareas: Tarea[];

  constructor() {
    // Compruebo si tengo el array en LocalStorage
    if (localStorage.getItem('arr_tareas')) {
      // Recupero de localStorage el array
      const strArr = localStorage.getItem('arr_tareas');
      this.arrTareas = JSON.parse(strArr);
    } else {
      this.arrTareas = new Array();
    }

  }

  onTareaCreada($event) {
    this.arrTareas.push($event);
    console.log(this.arrTareas);
    const arrToString = JSON.stringify(this.arrTareas);
    localStorage.setItem('arr_tareas', arrToString);
  }

  onClick() {
    this.arrTareas = [];
    localStorage.removeItem('arr_tareas');
  }

}
