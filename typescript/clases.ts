class Persona {

    nombre: string;
    direccion: string;
    edad: number;

    constructor(pNombre: string, pDireccion: string, pEdad: number) {
        this.nombre = pNombre;
        this.direccion = pDireccion;
        this.edad = pEdad;
    }

    mostrarPersona(): string {
        return `Me llamo ${this.nombre} y vivo en ${this.direccion}`;
    }

}

const p1 = new Persona('Mario', 'Gran Vía 32', 26);
const p2 = new Persona('Ana', 'Gran Vía 32', 26);

p1.mostrarPersona();
