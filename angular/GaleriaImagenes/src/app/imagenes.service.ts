import { Injectable } from '@angular/core';

export interface Imagen {
  titulo: string,
  descripcion: string,
  url: string,
  activa: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  listaImagenes: Imagen[];

  constructor() {
    this.listaImagenes = [
      { titulo: 'Cocido', descripcion: 'Mu rico en Madrid', url: 'https://i.blogs.es/d67ec6/cocido_madrileno-copia/1366_2000.jpg', activa: true },
      { titulo: 'Paella', descripcion: 'arroz con cosas', url: 'https://www.comedera.com/wp-content/uploads/2014/02/paella-de-mariscos-700x400.jpg', activa: true },
      { titulo: 'Cachopo', descripcion: 'A tope de carne', url: 'https://www.recetasderechupete.com/wp-content/uploads/2017/11/Cachopo.jpg?width=1200&enable=upscale', activa: false }
    ];
  }

  add(nuevaImagen: Imagen) {
    return new Promise((resolve, reject) => {
      this.listaImagenes.push(nuevaImagen);
      resolve(this.listaImagenes);
    });
  }

  getAll(): Promise<Imagen[]> {
    return new Promise((resolve, reject) => {
      resolve(this.listaImagenes);
    })
  }

  getActivas(): Promise<Imagen[]> {
    return new Promise((resolve, reject) => {
      resolve(this.listaImagenes.filter(imagen => imagen.activa));
    })
  }

}
