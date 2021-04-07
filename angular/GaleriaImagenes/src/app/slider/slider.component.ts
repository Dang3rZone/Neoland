import { Component, OnInit } from '@angular/core';
import { Imagen, ImagenesService } from '../imagenes.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  imagenes: Imagen[];
  imagenActual: number;

  constructor(
    private imagenesService: ImagenesService
  ) {
    this.imagenActual = 0;
  }

  ngOnInit(): void {
    this.imagenesService.getActivas()
      .then(listaImagenes => {
        this.imagenes = listaImagenes;
      })
  }

  onClick(siguiente) {
    if (siguiente) {
      this.imagenActual++;
    } else {
      this.imagenActual--;
    }
  }

}
