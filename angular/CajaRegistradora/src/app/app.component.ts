import { Component } from '@angular/core';
import { Producto } from './producto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrComida: Producto[];
  arrBebida: Producto[];
  productosSeleccionados: Producto[];

  constructor() {
    this.productosSeleccionados = [];
    this.arrComida = [
      {
        nombre: 'Cocido', precio: 12, imagen: 'https://i.blogs.es/d67ec6/cocido_madrileno-copia/1366_2000.jpg'
      },
      {
        nombre: 'Paella', precio: 13, imagen: 'https://www.comedera.com/wp-content/uploads/2014/02/paella-de-mariscos-700x400.jpg'
      },
      {
        nombre: 'Cachopo', precio: 15, imagen: 'https://www.recetasderechupete.com/wp-content/uploads/2017/11/Cachopo.jpg?width=1200&enable=upscale'
      },
      {
        nombre: 'Pizza', precio: 8, imagen: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg'
      },
      {
        nombre: 'Pasta', precio: 8.5, imagen: 'https://www.hola.com/imagenes//cocina/escuela/20180830129064/video-receta-como-hacer-pasta-casera/0-595-236/pasta-casera-t.jpg'
      },
      {
        nombre: 'Hamburguesa', precio: 6.75, imagen: 'https://www.hogar.mapfre.es/media/2018/09/hamburguesa-sencilla.jpg'
      },
    ]

    this.arrBebida = [
      {
        nombre: 'Cocido', precio: 12, imagen: 'https://i.blogs.es/d67ec6/cocido_madrileno-copia/1366_2000.jpg'
      },
      {
        nombre: 'Cocido', precio: 12, imagen: 'https://i.blogs.es/d67ec6/cocido_madrileno-copia/1366_2000.jpg'
      },
      {
        nombre: 'Cocido', precio: 12, imagen: 'https://i.blogs.es/d67ec6/cocido_madrileno-copia/1366_2000.jpg'
      },
    ]

  }

  onProductoSeleccionado($event) {
    this.productosSeleccionados.push($event);
  }

}
