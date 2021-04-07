class Universidad {

    constructor(pNombre) {
        this.nombre = pNombre;
        this.alumnos = new Array();
    }

    //rest parameter, es el spread operator pero aplicado a funciones, es decir me permite meter uno o mas elementos dentro de una funcion
    agregarAlumno(...pEstudiante) {
        this.alumnos.push(...pEstudiante);
    }

    obtenerAlumnosAsignatura(pNombreAsignatura) {
        let count = 0;
        for (let alumno of this.alumnos) {
            for (let asignatura of alumno.asignaturas) {
                if (asignatura.nombre == pNombreAsignatura) {
                    count++;
                }
            }
        }
        console.log(`alumnos ${pNombreAsignatura} ${count}`);
    }

    mostrarUniversidad() {
        console.log(`UNIVERSIDAD(nombre: ${this.nombre})`);
        this.alumnos.forEach(alumno => alumno.mostrarEstudiante());
    }

}

module.exports = Universidad;