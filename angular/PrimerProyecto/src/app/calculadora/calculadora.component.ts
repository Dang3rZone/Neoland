import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultado: string;
  calculado: boolean;

  constructor() {
    this.resultado = '0';
    this.calculado = true;
  }

  ngOnInit(): void {
  }

  onClick(pValor) {
    if (this.calculado) {
      this.resultado = pValor.toString();
      this.calculado = false;
    } else {
      this.resultado = this.resultado + pValor; // 93+45
    }
  }

  onClickResultado() {
    this.resultado = eval(this.resultado);
    this.calculado = true;
  }

}
