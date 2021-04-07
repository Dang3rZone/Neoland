import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  numero: number;
  departamento: string;

  constructor() {
    this.numero = 1;
    this.departamento = 'contabilidad';
  }

  ngOnInit(): void {
  }

  onChange($event) {
    this.departamento = $event.target.value;
  }

}
