import { Injectable } from '@angular/core';

export interface Persona {
  nombre: string;
  apellidos: string;
  edad: number;
  email: string;
  activo: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private personas: Persona[];

  constructor() {
    this.personas = [
      { nombre: 'Mario', apellidos: 'Girón', edad: 35, email: 'mario@neoland.es', activo: true },
      { nombre: 'Rosa', apellidos: 'Martínez', edad: 22, email: 'rosa@neoland.es', activo: false },
      { nombre: 'Amanda', apellidos: 'López', edad: 56, email: 'amanda@neoland.es', activo: true },
      { nombre: 'Víctor', apellidos: 'Ruíz', edad: 45, email: 'victor@neoland.es', activo: false },
      { nombre: 'Lorena', apellidos: 'García', edad: 12, email: 'lorena@neoland.es', activo: true }
    ]
  }

  // getAll(): Persona[] {
  //   return this.personas;
  // }

  getAll(): Promise<Persona[]> {
    return new Promise<Persona[]>((resolve, reject) => {
      resolve(this.personas);
    });
  }

  // getActivos(): Promise<Persona[]> {
  //   return new Promise((resolve, reject) => {
  //     let arrFiltrado = [];
  //     for (let persona of this.personas) {
  //       if (persona.activo) {
  //         arrFiltrado.push(persona);
  //       }
  //     }
  //     resolve(arrFiltrado);
  //   });
  // }

  getActivos(): Promise<Persona[]> {
    return new Promise((resolve, reject) => {
      resolve(this.personas.filter(persona => persona.activo));
    });
  }

  getMenores30(): Promise<Persona[]> {
    return new Promise((resolve, reject) => {
      let arrFiltrado = [];
      for (let persona of this.personas) {
        if (persona.edad <= 30) {
          arrFiltrado.push(persona);
        }
      }
      resolve(arrFiltrado);
    });
  }

  getMenores30V2() {
    return new Promise((resolve, reject) => {
      resolve(this.personas.filter(persona => persona.edad <= 30));
    });
  }

  getMenoresEdad(pEdad): Promise<Persona[]> {
    return new Promise<Persona[]>((resolve, reject) => {
      resolve(this.personas.filter(persona => persona.edad <= pEdad));
    });
  }

}






// let prom = new Promise((resolve, reject) => {
//   let random = Math.random();
//   if (random > 0.5) {
//     resolve(random);
//   } else {
//     reject('El número es menor de 0.5');
//   }
// });

// // let prom2 = Promise.resolve('Siempre se resuelve');

// prom
//   .then((random) => console.log(random))
//   .catch((error) => console.log(error));


// <app-navbar colorFondo = "red" colorEnlace = "blue" >