let circuito = document.querySelector('.lemans');
let acelerar = document.querySelector('#acelerar');
let retroceder = document.querySelector('#retroceder');
let color = document.querySelector('#color');

const ferrari = new Coche('ferrari', 'f40', circuito);
const fiatpanda = new Coche('fiat', 'panda', circuito, 'black');
const opelvectra = new Coche('opel', 'vectra', circuito, 'blue');


acelerar.addEventListener('click', mover);
retroceder.addEventListener('click', atras);
color.addEventListener('click', cambiarColor);

function mover(event) {
    ferrari.acelerar(50);
    fiatpanda.acelerar(10);
}

function atras(event) {
    ferrari.retroceder(50);
}

function cambiarColor(event) {
    ferrari.color = event.target.dataset.color;
    ferrari.div.style.backgroundColor = ferrari.color;
}