let nombre = 'Rosa';
let numero = 12;
let activo = true;
console.log(nombre, numero, activo);
let numeros = [1, 2, 3, 4, 5, 6];
let animales = ['perro', 'pájaro', 'león'];
let tupla = ['uno', 12];
let datos = 'cadena';
datos = true;
datos = 89;
// FUNCIONES
// Función que suma dos numeros
// Autor: Mario
function sumar(numA, numB) {
    return numA + numB;
}
function decirHola() {
    console.log('Hola');
}
function decirHola2() {
    return 'Hola';
}
const sumar2 = function (numA, numB) {
    return numA + numB;
};
const sumar3 = (numA, numB) => {
    return numA + numB;
};
sumar(1, 12);
decirHola();
