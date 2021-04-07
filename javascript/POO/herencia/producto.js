export default class Producto {

    constructor(pTitulo, pPrecio) {
        this.titulo = pTitulo;
        this.precio = pPrecio;
        this.stock = true;
    }

    mostrarProducto(pSection) {
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        h2.innerText = `${this.titulo}: ${this.precio}`;

        article.appendChild(h2);
        pSection.appendChild(article);
    }

    comprarProducto() {
        this.stock = false;
    }

}
