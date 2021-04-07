import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tarea } from '../tarea.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  // Defino el Output que me va a servir para intercambiar información con el padre
  // Le digo que el dato que voy a emitir es una Tarea
  @Output() tareaCreada: EventEmitter<Tarea>;

  nuevaTarea: Tarea;

  constructor() {
    this.nuevaTarea = { completa: false };
    this.tareaCreada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick() {
    if (this.nuevaTarea.texto && this.nuevaTarea.prioridad) {
      this.tareaCreada.emit(this.nuevaTarea);
      this.nuevaTarea = { completa: false };
    } else {
      alert('Rellena todo!!');
    }
  }

}
