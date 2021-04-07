import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { New } from '../models/new.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  arrNews: New[];
  constructor() {
    this.arrNews = [
      {
        titulo:
          'Primer tráiler de Cruella, la precuela en imagen real de 101 Dálmatas con Emma Stone',
        texto:
          'Tal y como se había anticipado ayer al publicar el primer póster, Disney por fin ha revelado el primer tráiler de Cruella, la precuela en imagen real de 101 Dálmatas con la ganadora de un Oscar por La La Land Emma Stone recogiendo el testigo de Glenn Close como la villana obsesionada con los preciosos perritos de manchas.',
        autor: 'David Soriano',
        imagen:
          'https://oyster.ignimgs.com/wordpress/stg.ign.com/2021/02/Disney-Cruella-Poster.jpg?fit=bounds&width=640&height=480',
        fecha: new Date('2021/11/02'),
        categoria: 'cine',
      }
    ]

    localStorage.setItem('news', JSON.stringify(this.arrNews));
  }

  getAll() {
    this.arrNews = JSON.parse(localStorage.getItem('news'));
    return this.arrNews;
  }


}
