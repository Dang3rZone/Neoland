import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crono',
  templateUrl: './crono.component.html',
  styleUrls: ['./crono.component.css']
})
export class CronoComponent implements OnInit {

  @Input() contador: number;

  // 1 - defininimos el emisor
  @Output() terminaContador: EventEmitter<string>;

  constructor() {
    this.contador = 12;
    // 2 - inicializamos el emisor
    this.terminaContador = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick() {
    let interval = setInterval(() => {
      this.contador--;
      if (this.contador === 0) {
        clearInterval(interval);
        // 3 - emitimos el evento
        this.terminaContador.emit('El crono ha terminado');
      }
    }, 1000);
  }

}