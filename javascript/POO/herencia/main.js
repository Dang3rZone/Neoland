//importar los ficheros que necesito
import Producto from './producto.js'; //obligatorio js
import Articulo from './articulo.js';



let sectionCatologo = document.querySelector('#catalogo');
const listaProductos = new Array(
    new Producto('Jabon', 2),
    new Producto('Pan', 0.50)
)

const listaCompra = new Array(
    new Articulo('Papel higienico', 7, 'urgente', 3),
    new Articulo('Mejillones', 3, 'no urgente', 2),
    new Articulo('Coca Cola', 1, 'no urgente', 6),
    new Articulo('Pringles', 10, 'urgente', 1),
)


for (let articulo of listaCompra) {
    articulo.mostrarProducto(sectionCatologo);
    let article = document.querySelector('article:last-child');
    let precio = document.createElement('div');
    precio.innerText = 'total:' + articulo.calcularPrecio();
    article.appendChild(precio);
}

// for (let producto of listaProductos) {
//     producto.mostrarProducto(sectionCatologo);
// }