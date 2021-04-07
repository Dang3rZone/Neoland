import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Escritor, EscritoresService } from 'src/app/services/escritores.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  escritor: Escritor;
  mostrarLibros: boolean;

  constructor(
    private escritoresService: EscritoresService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.mostrarLibros = false;
  }

  // ngOnInit(): void {
  //   this.activatedRoute.params.subscribe(params => {
  //     this.escritoresService.getById(params.escritorId)
  //       .then(escritor => {
  //         console.log(escritor);
  //       })
  //       .catch(error => console.log(error));
  //   });
  // }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      // params SIEMPRE me devuelve los valores en formato STRING
      const id = parseInt(params.escritorId);
      this.escritor = await this.escritoresService.getById(id);
    });
  }

  onClick() {
    // SI mostrarLibros es VERDADERO
    //   navego a / escritores / ID
    //   cambio mostrarLibros a false
    // SI NO
    //   navego a / escritores / ID / libros
    //   cambio mostrarLibros a true
    const url = ['/escritores', this.escritor.id];
    if (!this.mostrarLibros) {
      url.push('libros');
    }
    this.router.navigate(url);
    this.mostrarLibros = !this.mostrarLibros;
  }

}