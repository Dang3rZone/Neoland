import { Injectable } from '@angular/core';
import { LIBROS } from '../db/libros.db';

export interface Libro {
  id: number;
  titulo: string;
  publicado: number;
  imagen: string;
  escritor: number;
}

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  // getByEscritor(escritorId: number): Promise<Libro[]> {
  //   return new Promise((resolve, reject) => {
  //     const arrFiltrado = [];
  //     for (let libro of LIBROS) {
  //       if (libro.escritor === escritorId) {
  //         arrFiltrado.push(libro);
  //       }
  //     }
  //     resolve(arrFiltrado);
  //   });
  // }

  getByEscritor(pEscritorId: number): Promise<Libro[]> {
    return new Promise((resolve, reject) => {
      const arrFiltrado = LIBROS.filter(libro => {
        return libro.escritor === pEscritorId;
      });
      resolve(arrFiltrado);
    });
  }

}
