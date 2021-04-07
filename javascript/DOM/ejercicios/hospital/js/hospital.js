// 3 - pacientes por edad
function filtrarPorEdad(pEdadMin, pEdadMax, pListaPacientes) {
    let listaEdad = pListaPacientes.filter(paciente => {
        return paciente.edad >= pEdadMin && paciente.edad <= pEdadMax
    })
    return listaEdad;
}

//filtrarPorEdad(18, 60, pacientes)

//4 -pacientes por enfermedad - diagnostico

function filtrarPorDiagnostico(pDiagnostico, pListaPacientes) {
    let listaFiltrada = pListaPacientes.filter(paciente => paciente.diagnostico == pDiagnostico)

    return listaFiltrada;
}


// 5 - pintarPacientes
let seccionPacientes = document.querySelector('#seccionpacientes');
function pintarPacientes(pListaPacientes) {

    seccionPacientes.innerHTML = "";
    for (let paciente of pListaPacientes) {
        seccionPacientes.innerHTML += `<article>
            <h3>${paciente.nombre} ${paciente.apellido}</h3>
            <ul>
                <li>edad: ${paciente.edad}</li>
                <li>Seguridad Social: ${paciente.numeroSS}</li>
            </ul>
            <div>
                ${paciente.diagnostico.toUpperCase()}
            </div>
        </article>
        <hr>`
    }
}

//filtrar por diagnostico

let listaResultante = filtrarPorDiagnostico('torcedura', pacientes);

//filtrar por callback

pintarPacientes(filtrarPorEdad(18, 35, pacientes));

//filtrar los pacientes que tenga gripe y entre 20 y 30

//let listaPacientesPorEdad = filtrarPorEdad(20, 30, pacientes);
//let conGripe = filtrarPorDiagnostico('gripe', listaPacientesPorEdad);

//pintarPacientes(conGripe);

//numeroSS acabe en 0

function filtrarPorNumeroSS(pNumero, pLista) {
    let listaFiltrada = pLista.filter(paciente => {
        let ultimoDigito = paciente.numeroSS[paciente.numeroSS.length - 1]
        return ultimoDigito == pNumero
    })

    return listaFiltrada;
}

let listaNumeroSS = filtrarPorNumeroSS(0, pacientes);
console.log(listaNumeroSS);


//buscar pacientes por nombre 

function filtrarPorNombre(pNombre, pListaPacientes) {
    let listaFiltrada = pListaPacientes.filter(paciente => {
        return paciente.nombre.includes(pNombre)
    })

    return listaFiltrada;
}

let listaPorNombre = filtrarPorNombre('Juan', pacientes);
console.log(listaPorNombre);


