import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  // Valores de entrada del componente
  @Input() numA: number;
  @Input() numB: number;

  resultado: number;

  constructor() {
    this.numA = 8;
    this.numB = 5;
    this.resultado = 0;
  }

  ngOnInit(): void {
  }

  onClick() {
    this.resultado = this.numA + this.numB;
  }

}