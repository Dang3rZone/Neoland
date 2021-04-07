import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../producto.interface';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  @Input() arrProductos: Producto[];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(pIndice) {
    this.arrProductos.splice(pIndice, 1);
  }

  calcularPrecio() {
    let resultado = 0;
    for (let producto of this.arrProductos) {
      resultado += producto.precio;
    }
    return resultado;
  }

}
