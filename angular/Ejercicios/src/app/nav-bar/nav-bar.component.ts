import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() opcionPulsada: EventEmitter<string>;

  @Input() colorFondo: string;
  @Input() colorTexto: string;

  constructor() {
    this.opcionPulsada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(pTextoBoton) {
    this.opcionPulsada.emit(pTextoBoton);
  }

}
