import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

declare var Swal;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  listaProductos: any;

  constructor(private productosService: ProductosService) { }

  async ngOnInit() {
    this.listaProductos = await this.productosService.getCart();
  }

  onClick(pProducto) {
    Swal.fire({
      title: '¿Deseas borrar este producto?',
      text: "Si lo borras no hay marcha atrás",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, bórralo!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await this.productosService.removeProduct(pProducto.id);
        console.log(response);
        this.listaProductos = await this.productosService.getCart();
        Swal.fire('Articulo borrado');
      }
    })
  }

}
