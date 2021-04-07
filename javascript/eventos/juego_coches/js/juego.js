let ferrari = document.querySelector('#coche1');
let mclaren = document.querySelector('#coche2');
let redbull = document.querySelector('#coche3');
const velocidad = 15;
let avanceFerrari = 0;
let avanceMclaren = 0;
let avanceRedBull = 0;
let nitro = 3;

let mensaje = document.querySelector('#mensaje');

//lanzo el evento del teclado sobre el document
document.addEventListener('keydown', capturarTeclas);

function capturarTeclas(event) {
    switch (event.keyCode) {
        case 32:
            //mover el coche
            moverFerrari(velocidad)
            break;

        case 78:
            //aqui solo puedo usar esto 3 veces
            if (nitro > 0) {
                moverFerrari(40);
                nitro--;
            }
            break;
    }
}

function moverFerrari(pVelocidad) {
    avanceFerrari += pVelocidad;
    ferrari.style.marginLeft = avanceFerrari + 'px';
    if (avanceFerrari >= 670) {
        pararJuego('Ferrari');
    }
    //ferrari.style.transform = `translateX(${avanceFerrari}px)`;
}

//mclaren a una velocidad constante, para ello vamos a usar funciones intervalicas. Las function intervalicas se asocian a constantes para poderlas parar.

const intervalo1 = setInterval(moverMclaren, 150);

function moverMclaren() {
    avanceMclaren += 20;
    mclaren.style.marginLeft = avanceMclaren + 'px';
    if (avanceMclaren >= 670) {
        pararJuego('McLaren');
    }
}

//redbull aleatoriamente.
let intervalo2 = setInterval(moverRedBull, 150);

function moverRedBull() {
    //Math.randow() devuelve numeros aleatorios entre 0 y 1 sin incluir el 1;
    avanceRedBull += Math.random() * 41;
    redbull.style.marginLeft = avanceRedBull + 'px';

    if (avanceRedBull >= 670) {
        pararJuego('Redbull');
    }
}

function pararJuego(pGanador) {
    mensaje.innerText = "Ha ganado " + pGanador;
    clearInterval(intervalo1);
    clearInterval(intervalo2);
    document.removeEventListener('keydown', capturarTeclas);
}


