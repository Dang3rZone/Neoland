import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-bar2',
  templateUrl: './tab-bar2.component.html',
  styleUrls: ['./tab-bar2.component.css']
})
export class TabBar2Component implements OnInit {

  secciones: string[];
  tabSeleccionada: string;

  constructor() {
    this.secciones = ['calendar', 'stats', 'support', 'documentation'];
  }

  ngOnInit(): void {
  }

  onClick(pTexto) {
    this.tabSeleccionada = pTexto;
  }

}
