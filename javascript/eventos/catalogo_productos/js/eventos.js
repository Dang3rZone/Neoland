let sectionProducts = document.querySelector('section .flex');


const printProducts = function (pProductsList) {
    sectionProducts.innerHTML = "";
    pProductsList.forEach(product => {
        //pinto un producto.
        printOneProduct(product);
    });

}

const printOneProduct = function (pJsonProduct) {

    let article = document.createElement('article');
    let h3 = document.createElement('h3');
    let div = document.createElement('div'); //close
    let p = document.createElement('p');
    let figure = document.createElement('figure');


    //contenido
    let contentH3 = document.createTextNode(pJsonProduct.name);
    let contentP = document.createTextNode(`Precio: ${pJsonProduct.price} €`);

    h3.appendChild(contentH3);
    p.appendChild(contentP);

    figure.innerHTML = `<img title="${pJsonProduct.name}" src="${pJsonProduct.photo}">`;
    div.innerText = 'X';
    div.classList.add('close');
    div.dataset.id = pJsonProduct.id;
    div.addEventListener('click', deleteProduct);

    //aqui habria que añadir el evento de borrar - el listener que tendria el div

    article.appendChild(figure);
    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(div);

    sectionProducts.appendChild(article);
}
printProducts(products);

function deleteProduct(event) {
    //para borrar un producto lo tenemos que borrar fisicamente y del array. removeChild() splice();
    let id = parseInt(event.target.dataset.id);
    //borrar fisicamente html
    let article = event.target.parentNode;
    //el article es el que quiero borrar.
    article.parentNode.removeChild(article);


    //borrar del array, tengo que tener la posicion del elemento.
    let position = products.findIndex(product => product.id === id);

    products.splice(position, 1)
    console.log(products);

}

//pintar un producto introducido por formulario. CUIDADO CON LA ACCION POR DEFECTO.
//hay que añadirlo en array. //no esta hecha
//pintarlo en el interfaz. //si esta hecha printOneProduct

const inputName = document.querySelector('#name');
const inputPhoto = document.querySelector('#photo');
const inputPrice = document.querySelector('#price');
let idProduct = products.length;

const btnForm = document.querySelector('#btn');

btnForm.addEventListener('click', getDataForm);

function getDataForm(event) {
    event.preventDefault();

    const nameProduct = inputName.value;
    const photoProduct = inputPhoto.value;
    const priceProduct = inputPrice.value;

    if (nameProduct != "" && photoProduct != "" && priceProduct != "") {
        const newProduct = {
            id: ++idProduct, // postincremento
            name: nameProduct,
            price: parseFloat(priceProduct),
            photo: photoProduct
        };
        saveProduct(newProduct);
    } else {
        alert('Los campos deben rellenarse');
    }

}

// Filtrar por precio
const btnFilter = document.querySelector('#btnFilter');
const inputMinPrice = document.querySelector('#minPrice');
const inputMaxPrice = document.querySelector('#maxPrice');

btnFilter.addEventListener('click', getDataFilter);

function getDataFilter(event) {

    const minPrice = inputMinPrice.value;
    const maxPrice = inputMaxPrice.value;

    if (minPrice != '' && maxPrice != '') {
        // FILTRAR!!
        const productosFiltrados = filterByPrice(minPrice, maxPrice, products);
        printProducts(productosFiltrados);
    } else {
        // Mostramos todos los productos
        printProducts(products);
    }
}