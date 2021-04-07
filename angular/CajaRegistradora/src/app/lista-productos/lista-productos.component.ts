import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../producto.interface';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() productos: Producto[];
  @Input() titulo: string;

  // 1 - Definición del Output
  @Output() productoSeleccionado: EventEmitter<Producto>;

  constructor() {
    // 2 - Inicialización
    this.productoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(pProducto) {
    console.log(pProducto);
    this.productoSeleccionado.emit(pProducto);
  }

}