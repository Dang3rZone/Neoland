const Profesor = require('./profesor');
const Asignatura = require('./asignatura');
const Estudiante = require('./estudiante');
const Universidad = require('./universidad');

//voy a crear dos profesores.
let profesor1 = new Profesor('Ramón', 'García', 5)
let profesor2 = new Profesor('Rosa', 'Martinez', 9)

//tres asignaturas
let algebra = new Asignatura('Álgebra', profesor1)
let electronica = new Asignatura('Electrónica', profesor2)
let fisica = new Asignatura('Física', profesor2)

//necesitamos estudiantes
let estudiante1 = new Estudiante('Pepe', 'Ortiz')
let estudiante2 = new Estudiante('Ana', 'Jiménez')
let estudiante3 = new Estudiante('Lola', 'López')

//hay que asignarles asignaturas, para ello el objeto estudiante tiene un metodo que agregarAsignaturas

estudiante1.agregarAsignaturas(electronica);

estudiante2.agregarAsignaturas(algebra, fisica);


estudiante3.agregarAsignaturas(electronica);



//construir la universidad

let universidad = new Universidad('UC3M');
universidad.agregarAlumno(estudiante1, estudiante2, estudiante3);
universidad.obtenerAlumnosAsignatura('Electrónica');
universidad.mostrarUniversidad();