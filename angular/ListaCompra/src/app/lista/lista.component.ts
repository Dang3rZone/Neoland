import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from '../producto.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() productos: Producto[]
  @Output() cambiaProducto: EventEmitter<number>;

  constructor() {
    this.cambiaProducto = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(indice) {
    this.cambiaProducto.emit(indice);
  }

}
