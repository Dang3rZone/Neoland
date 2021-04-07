import { Component, OnInit } from '@angular/core';
import { Cliente, ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  arrClientes: Cliente[];

  constructor(private clientesService: ClientesService) {
    this.arrClientes = [];
  }

  ngOnInit(): void {
    this.clientesService.getAll()
      .then(response => {
        this.arrClientes = response;
      })
      .catch(error => {
        console.log(error);
      });
  }

}
