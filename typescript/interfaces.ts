interface Paciente {
    nombre: string;
    apellido: string;
    edad: number;
    diagnostico: string;
    numeroSS: string;
    direccion?: string;
}

const paciente1: Paciente = {
    nombre: 'Pedro',
    apellido: 'García López',
    edad: 34,
    diagnostico: 'pulmonía',
    numeroSS: 'A12349'
}

const pacientes: Paciente[] = [paciente1];