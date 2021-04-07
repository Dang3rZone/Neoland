import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  propiedadesParrafo: any;
  isSubrayado: boolean;
  mostrar: boolean;

  constructor() {
    this.mostrar = true;
    this.isSubrayado = true;
    this.propiedadesParrafo = {
      color: 'indigo',
      backgroundColor: 'lightyellow',
      padding: '50px'
    }
  }

  ngOnInit() {
    setInterval(() => {
      this.mostrar = !this.mostrar;
    }, 10000);
  }

  onClick() {
    this.propiedadesParrafo.color = 'green';
  }

  onInput($event) {
    this.propiedadesParrafo.color = $event.target.value;
  }

  onInputRange($event) {
    this.propiedadesParrafo.fontSize = $event.target.value + 'px';
  }

  // onClickSubrayado() {
  //   if (this.isSubrayado) {
  //     this.isSubrayado = false;
  //   } else {
  //     this.isSubrayado = true;
  //   }
  // }

  // onClickSubrayado() {
  //   // VARIABLE = (CONDICION) ? VALOR SI TRUE : VALOR SI FALSE;
  //   this.isSubrayado = (this.isSubrayado) ? false : true;
  // }

  onClickSubrayado() {
    this.isSubrayado = !this.isSubrayado;
  }

}