import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('cambiaColor', [
      state('verde', style({
        'background-color': 'green'
      })),
      state('rojo', style({
        'background-color': 'red',
        'transform': 'scale(0.7)'
      })),
      state('amarillo', style({
        'background-color': 'yellow'
      })),
      transition('rojo => amarillo', animate(1000)),
      transition('amarillo => verde', animate('.5s')),
      transition('verde => rojo', animate(1200)),
      transition('void => *', [
        style({
          'transform': 'translateX(-100%)',
          'opacity': 0
        }),
        animate('.8s')
      ])
    ])
  ]
})
export class AppComponent {

  color: string;

  constructor() {
    this.color = 'verde';
    setInterval(() => {
      if (this.color === 'rojo') {
        this.color = 'amarillo';
      } else if (this.color === 'amarillo') {
        this.color = 'verde';
      } else if (this.color === 'verde') {
        this.color = 'rojo';
      }
    }, 2000);
  }

}
