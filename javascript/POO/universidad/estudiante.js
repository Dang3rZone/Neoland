class Estudiante {

    constructor(pNombre, pApellido) {
        this.asignaturas = new Array();
        this.nombre = pNombre;
        this.apellidos = pApellido;
    }

    agregarAsignaturas(...pAsignatura) {
        this.asignaturas.push(...pAsignatura)
    }

    mostrarEstudiante() {
        console.log(`ESTUDIANTE (nombre: ${this.nombre}, apellidos: ${this.apellidos})`);
        console.log(`Estas son las asignaturas que cursa:`);

        for (let asignatura of this.asignaturas) {
            asignatura.mostrarAsignatura(true)
        }
    }



}

module.exports = Estudiante;