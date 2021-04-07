import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})
export class TabBarComponent implements OnInit {

  tabSeleccionada: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(pTexto) {
    this.tabSeleccionada = pTexto;
  }

}
