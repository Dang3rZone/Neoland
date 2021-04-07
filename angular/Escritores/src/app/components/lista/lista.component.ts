import { Component, OnInit } from '@angular/core';
import { Escritor, EscritoresService } from 'src/app/services/escritores.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listaEscritores: Escritor[];
  listaPaises: string[];

  constructor(private escritoresService: EscritoresService) {
    this.listaEscritores = [];
  }

  // ngOnInit(): void {
  //   this.escritoresService.getAll()
  //     .then(arrEscritores => {
  //       console.log(arrEscritores);
  //       this.listaEscritores = arrEscritores;
  //     })
  //     .catch(error => console.log(error));
  // }  

  async ngOnInit() {
    try {
      this.listaEscritores = await this.escritoresService.getAll();
    } catch (error) {
      console.log(error);
    }

    this.listaPaises = this.escritoresService.getPaises();
  }

  async onChange($event) {
    try {
      if ($event.target.value === 'todos') {
        this.listaEscritores = await this.escritoresService.getAll();
      } else {
        this.listaEscritores = await this.escritoresService.getByPais($event.target.value);
      }
    } catch (error) {
      console.log(error);
    }
  }

}



