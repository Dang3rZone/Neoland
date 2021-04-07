import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productoId: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.productoId);
      this.productoId = params.productoId;
    });
  }

}
