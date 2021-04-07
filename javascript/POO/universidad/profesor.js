class Profesor {

    constructor(pNombre, pApellido, pExperiencia) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.experiencia = pExperiencia
    }

    mostrarProfesor() {
        console.log(`PROFESOR (nombre: ${this.nombre}, apellidos: 
             ${this.apellido}, experiencia: ${this.experiencia})`)
    }

}


module.exports = Profesor;
