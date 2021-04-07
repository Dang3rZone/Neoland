class Calculadora {
    //no es obligatorio al menos javascript implementar un metodo contructor. El contructor inicializa propiedades si no hay no es necesario.

    sumar(pNumero1, pNumero2) {
        return pNumero1 + pNumero2;
    }

    restar(pNumero1, pNumero2) {
        if (pNumero1 > pNumero2) {
            return pNumero1 - pNumero2;
        } else {
            return pNumero2 - pNumero1;
        }
    }

    multiplicar(pNumero1, pNumero2) {
        return pNumero1 * pNumero2;
    }

    dividir(pNumero1, pNumero2) {
        return pNumero1 / pNumero2;
    }

    pintarResultado(pResultado, pObjDom) {
        pObjDom.innerText = pResultado;
    }

}