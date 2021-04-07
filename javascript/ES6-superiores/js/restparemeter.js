
//rest paremeter 
let literal = "Juan";


function calculadora(pTipo, ...numeros) {
    let resultado = 0;
    switch (pTipo) {
        case 'sumar':

            for (let numero of [...numeros]) {
                resultado += numero;
            }
            break;

        case 'restar':

            for (let numero of [...numeros]) {
                resultado -= numero;
            }
            break;
    }

    console.log(resultado);
}



export { literal, calculadora }


