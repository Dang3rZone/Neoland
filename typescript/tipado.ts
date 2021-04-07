let nombre: string = 'Rosa';

let numero: number = 12;

let activo: boolean = true;

console.log(nombre, numero, activo);

let numeros: number[] = [1, 2, 3, 4, 5, 6];
let animales: Array<string> = ['perro', 'pájaro', 'león'];

let tupla: [string, number] = ['uno', 12];

let datos: any = 'cadena';
datos = true;
datos = 89;

// FUNCIONES

// Función que suma dos numeros
// Autor: Mario
function sumar(numA: number, numB: number): number {
    return numA + numB;
}

function decirHola(): void {
    console.log('Hola');
}

function decirHola2(): string {
    return 'Hola';
}

const sumar2 = function (numA: number, numB: number): number {
    return numA + numB;
}

const sumar3 = (numA: number, numB: number): number => {
    return numA + numB;
}

sumar(1, 12);
decirHola();