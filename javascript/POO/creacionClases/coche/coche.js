class Coche {

    constructor(pMarca, pModelo, pSection, pColor = "red") {
        //inicializamos las propiedades
        this.marca = pMarca;
        this.modelo = pModelo;
        this.color = pColor;
        this.velocidad = 0;
        this.div = document.createElement('div');
        this.div.style.width = '200px';
        this.div.style.height = '100px';
        this.div.style.backgroundColor = this.color;
        pSection.appendChild(this.div);

    }

    acelerar(pVelocidad) {
        this.velocidad += pVelocidad;
        this.div.style.marginLeft = this.velocidad + 'px';
    }

    retroceder(pVelocidad) {
        this.velocidad -= pVelocidad;
        this.div.style.marginLeft = this.velocidad + 'px';
    }

}

