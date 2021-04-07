import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-mapa-ng',
  templateUrl: './mapa-ng.component.html',
  styleUrls: ['./mapa-ng.component.css']
})
export class MapaNgComponent implements OnInit {

  latitud: number;
  longitud: number;
  paises: any;

  constructor(
    private paisesService: PaisesService
  ) {
    this.latitud = 40;
    this.longitud = -3;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.latitud = position.coords.latitude;
      this.longitud = position.coords.longitude;
    });

    this.paisesService.getPaises()
      .then(response => {
        console.log(response);
        this.paises = response;
      })
  }

}
