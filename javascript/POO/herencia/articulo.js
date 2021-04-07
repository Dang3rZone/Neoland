import Producto from "./producto.js";

export default class Articulo extends Producto {

    constructor(pTitulo, pPrecio, pPrioridad, pCantidad = 1) {
        super(pTitulo, pPrecio);
        this.cantidad = pCantidad;
        this.prioridad = pPrioridad;
    }

    calcularPrecio() {
        return this.precio * this.cantidad;
    }

}