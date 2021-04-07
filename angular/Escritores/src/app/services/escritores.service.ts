/**
 * Servicio que gestione los datos de ESCRITORES
 */

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ESCRITORES } from '../db/escritores.db';

export interface Escritor {
  id: number;
  nombre: string;
  apellidos: string;
  imagen: string;
  pais: string
}

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() {
    console.log(ESCRITORES);
  }

  getAll(): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      resolve(ESCRITORES);
    });
  }

  getByPais(pPais: string): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      const arrFiltrado = [];
      for (let escritor of ESCRITORES) {
        if (escritor.pais === pPais) {
          arrFiltrado.push(escritor);
        }
      }
      resolve(arrFiltrado);
    });
  }

  getByPais_V2(pPais: string): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      resolve(ESCRITORES.filter(escritor => escritor.pais === pPais));
    });
  }


  getPaises(): string[] {
    // ['españa', 'españa', 'reino unido', 'canadá', 'reino unido'...]
    const arrNuevo = ESCRITORES.map(escritor => escritor.pais);
    return [...new Set(arrNuevo)];
  }

  getById(pId: number): Promise<Escritor> {
    return new Promise((resolve, reject) => {
      const escritorEncontrado = ESCRITORES.find(escritor => {
        return escritor.id === pId;
      });
      resolve(escritorEncontrado);
    })
  }

  // getById(pId: number): Promise<Escritor> {
  //   return new Promise((resolve, reject) => {
  //     for (let escritor of ESCRITORES) {
  //       if (escritor.id === pId) resolve(escritor);
  //     }
  //   })
  // }


}