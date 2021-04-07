let sectionAgenda = document.querySelector('#agenda');

const printContact = function (pContactList) {
    sectionAgenda.innerHTML = "";
    for (let contact of pContactList) {
        sectionAgenda.innerHTML += `<article>
            <h2>${contact.name}</h2>
            <ul>
                <li>telefono: ${contact.phone}</li>
                <li>email: ${contact.email}</li>
            </ul>
        </article>`;
    }
}

//pintar solo los laborales.
function filterContactsByCategory(pCategory, pContactList) {

    const listaFiltrada = pContactList.filter(contact => contact.category == pCategory)

    return listaFiltrada;
}

//quiero sacar por consola todos los contactos masculinos

function filterByGender(pListaContactos, pGender) {

    let listaContactosGender = pListaContactos.filter((contacto) => contacto.gender == pGender)

    return listaContactosGender;
}



//pintar toda la lista de contactos
printContact(contactos);

let selectTypeContact = document.querySelector('#tipo');

selectTypeContact.addEventListener('change', getType);

function getType(event) {
    //todos los elementos de tipo formulario recoge su valor con un propiedad value

    let tipo = event.target.value;
    if (tipo != "") {
        let lista = filterContactsByCategory(tipo, contactos);
        printContact(lista);
    } else {
        printContact(contactos);
    }

}

//quiero un filtro selector por genero masculino , y femenino.

let selectGender = document.querySelector('#gender');
selectGender.addEventListener('change', getGender);

function getGender(event) {
    let gender = event.target.value;
    if (gender != "") {
        let lista = filterByGender(contactos, gender);
        printContact(lista);
    } else {
        printContact(contactos);
    }
}

//quiero la busqueda por palabra
let inputNombre = document.querySelector('#nombre');
let btnBusqueda = document.querySelector('#btn');

btnBusqueda.addEventListener('click', getInputData);
inputNombre.addEventListener('keydown', getInputData); //enter

function getInputData(event) {
    if (event.keyCode == 13 || event.type == 'click') {
        let palabraBuscar = inputNombre.value;
        let listaPersonas = searchByWord(palabraBuscar, contactos);
        printContact(listaPersonas);
    }
}

function searchByWord(pWord, pContactList) {
    const filterList = pContactList.filter(contact => {
        return contact.name.toLowerCase().includes(pWord.toLowerCase());
    })
    return filterList
}

















//input text con un button ahi pondreis el nombre del contacto y os mostrara el contacto completo.
//Bola extra deberia funcionar si pongo solo Mar -> Maria