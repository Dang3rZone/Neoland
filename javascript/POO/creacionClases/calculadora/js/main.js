let input1 = document.querySelector('#numero1');
let input2 = document.querySelector('#numero2');
let h1resultado = document.querySelector('.resultado');
let botones = document.querySelectorAll('button');
botones.forEach(boton => {
    boton.addEventListener('click', calcular);
})

function calcular(event) {
    const miCalculadora = new Calculadora();
    let numero1 = parseFloat(input1.value);
    let numero2 = parseFloat(input2.value);
    let resultado = 0;
    switch (event.target.innerText) {
        case 'sumar':
            resultado = miCalculadora.sumar(numero1, numero2);
            break;

        case 'restar':
            resultado = miCalculadora.restar(numero1, numero2);
            break;

        case 'multiplicar':
            resultado = miCalculadora.multiplicar(numero1, numero2);
            break;
    }

    miCalculadora.pintarResultado(resultado, h1resultado);
}
