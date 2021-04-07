import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  @Input() segundos: number;

  interval: any;

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.segundos);
    clearInterval(this.interval);
  }

  calculo() {
    const horas = this.segundos / (60 * 60);
    this.interval = setInterval(() => {
      console.log('HOLA')
    }, 1000);
    return `Horas: ${horas}`;
  }

}
