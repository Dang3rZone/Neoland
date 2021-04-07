import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro, LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  listaLibros: Libro[];

  constructor(
    private librosService: LibrosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    // Accedo primero al parent porque este componente se activa a través de una ruta children
    this.activatedRoute.parent.params.subscribe(async params => {
      const id = parseInt(params.escritorId);
      this.listaLibros = await this.librosService.getByEscritor(id);
    });

  }

}
