/// <reference path="../../../node_modules/@types/googlemaps/index.d.ts" />

import { ViewChild, ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa-js',
  templateUrl: './mapa-js.component.html',
  styleUrls: ['./mapa-js.component.css']
})
export class MapaJsComponent implements OnInit {

  mapa: google.maps.Map;
  markers: google.maps.Marker[];
  markerLastVisited: google.maps.Marker;

  @ViewChild('divMapa') divMapa: ElementRef;

  constructor() {
    this.markers = [];
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      const center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      this.mapa.setCenter(center);

      const marker = new google.maps.Marker({
        position: center,
        animation: google.maps.Animation.DROP
      });
      setTimeout(() => marker.setMap(this.mapa), 1000);
    });
  }

  ngAfterViewInit() {
    this.loadMap();
    this.loadAutocomplete();
  }

  // Carga el mapa dentro del HTML
  loadMap() {
    const mapOptions = {
      center: new google.maps.LatLng(40, -3),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.HYBRID
    }

    // Cargamos el mapa
    this.mapa = new google.maps.Map(this.divMapa.nativeElement, mapOptions);

    // Definir el evento click sobre el mapa
    google.maps.event.addListener(this.mapa, 'click', (event: google.maps.MouseEvent) => {

      const newMarker = this.addMarker({
        latLng: event.latLng,
        animation: google.maps.Animation.DROP,
        urlIcon: 'https://i.pinimg.com/originals/12/15/30/12153058cf7f17ac38b1342db1d30be5.gif',
        map: this.mapa
      });
      newMarker.setDraggable(true);

      // Agrego el marker al array
      this.markers.push(newMarker);

      // Eventos sobre el marker
      google.maps.event.addListener(newMarker, 'click', event => {
        newMarker.setMap(null);
      });

      google.maps.event.addListener(newMarker, 'mouseover', event => {
        newMarker.setAnimation(google.maps.Animation.BOUNCE);
      });

      google.maps.event.addListener(newMarker, 'mouseout', event => {
        newMarker.setAnimation(null);
      });

    })
  }

  addMarker({ latLng, animation = google.maps.Animation.DROP, urlIcon = '', map }) {
    const marker = new google.maps.Marker({
      position: latLng,
      animation: animation,
      icon: {
        url: urlIcon,
        scaledSize: new google.maps.Size(50, 50)
      }
    });
    marker.setMap(map);
    return marker;
  }

  // Carga el campo de texto para recuperar información de Google Places
  loadAutocomplete() {
    const inputPlaces = document.querySelector('#inputPlaces') as HTMLInputElement;
    const autocomplete = new google.maps.places.Autocomplete(inputPlaces);

    google.maps.event.addListener(autocomplete, 'place_changed', event => {
      const place = autocomplete.getPlace();
      this.mapa.setCenter(place.geometry.location);
      this.addMarker({
        latLng: place.geometry.location,
        urlIcon: place.icon,
        map: this.mapa
      })
    });
  }

  onClick() {
    for (let marker of this.markers) {
      marker.setMap(null);
    }
    this.markers = [];
  }

  onClickRuta() {
    this.calcularRuta('plaza españa 11, madrid', 'doctor chiarri 4, valencia', google.maps.TravelMode.DRIVING);
  }

  calcularRuta(pOrigen, pDestino, pModoViaje) {
    // Servicio de google para gestionar rutas
    const directionsService = new google.maps.DirectionsService();
    // Servicio de google para pintar polígonos en el mapa
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(this.mapa);

    directionsService.route({
      origin: pOrigen,
      destination: pDestino,
      travelMode: pModoViaje
    }, result => {
      directionsRenderer.setDirections(result);
    });
  }

}
