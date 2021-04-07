import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

declare var Swal;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  listaProductos: any;
  listaCategorias: any;

  constructor(
    private productosService: ProductosService
  ) { }

  async ngOnInit() {
    this.listaProductos = await this.productosService.getAll();
    this.listaCategorias = await this.productosService.getCategorias();
  }

  async onChange($event) {
    if ($event.target.value === 'todos') {
      this.listaProductos = await this.productosService.getAll();
    } else {
      this.listaProductos = await this.productosService.getByCategoria($event.target.value);
    }
  }

  // TODO: URLS variables para cada producto
  async onClick(pProducto) {
    if (!localStorage.getItem('carrito_id')) {
      // Creamos el carrito
      const response = await this.productosService.createCart();
      localStorage.setItem('carrito_id', response['token_cart']);
    }
    // Agrego el producto al carrito
    const responseAdd = await this.productosService.addProduct(pProducto.id);
    console.log(responseAdd);
    Swal.fire(
      'Producto Agregado',
      'Ya tienes disponible tu producto en el carrito',
      'success'
    )
  }

}
