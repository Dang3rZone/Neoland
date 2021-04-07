import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../tarea.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() tareas: Tarea[];

  constructor() { }

  ngOnInit(): void {
  }

  onClickCompleta(pTarea) {
    pTarea.completa = !pTarea.completa;
    localStorage.setItem('arr_tareas', JSON.stringify(this.tareas));
  }

  onClickEliminar(pIndice) {
    this.tareas.splice(pIndice, 1);
    localStorage.setItem('arr_tareas', JSON.stringify(this.tareas));
  }

}
