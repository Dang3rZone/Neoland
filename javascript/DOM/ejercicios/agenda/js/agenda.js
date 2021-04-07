let sectionAgenda = document.querySelector('#agenda');


const printContact = function (pContactList) {
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

//printContact(contactos)

//pintar solo los laborales.

function filterContactsByCategory(pCategory, pContactList) {

    const listaFiltrada = pContactList.filter(contact => contact.category == pCategory)

    return listaFiltrada;
}

let listaLaborales = filterContactsByCategory('laboral', contactos);

//printContact(listaLaborales);

//quiero sacar por consola todos los contactos masculinos

function filterByGender(pListaContactos, pGender) {

    let listaContactosGender = pListaContactos.filter((contacto) => contacto.gender == pGender)

    return listaContactosGender;
}