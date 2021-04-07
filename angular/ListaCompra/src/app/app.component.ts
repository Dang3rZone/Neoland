import { Component } from '@angular/core';
import { Producto } from './producto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrProductos: Producto[];
  arrProductosComprados: Producto[];

  constructor() {
    this.arrProductos = [];
    this.arrProductosComprados = [];
  }

  onProductoCreado($event) {
    this.arrProductos.push($event);
    console.log(this.arrProductos);
  }

  onProductoComprado($event) {
    const productoBorrado = this.arrProductos.splice($event, 1)[0];
    this.arrProductosComprados.push(productoBorrado);
  }

  onProductoDevuelto($event) {
    const productoBorrado = this.arrProductosComprados.splice($event, 1)[0];
    this.arrProductos.push(productoBorrado);
  }

}
