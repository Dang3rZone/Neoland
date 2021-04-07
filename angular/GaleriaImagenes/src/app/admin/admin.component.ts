import { Component, OnInit } from '@angular/core';
import { Imagen, ImagenesService } from '../imagenes.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  imagenes: Imagen[];

  constructor(private imagenesService: ImagenesService) { }

  async ngOnInit() {
    this.imagenes = await this.imagenesService.getAll();
  }

  onClickActiva(pImagen) {
    pImagen.activa = !pImagen.activa;
  }

}
