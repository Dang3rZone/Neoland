import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numeros: number[];

  constructor() {
    this.numeros = [9, 4, 3, 6];
  }

  onTerminaContador($event) {
    console.log($event);
  }

}
