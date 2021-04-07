// function saveProduct(pProduct) {

//     let duplicado = false;

//     for (let product of products) {
//         if (product.name === pProduct.name && product.price === pProduct.price && product.photo === pProduct.photo) {
//             duplicado = true;
//         }
//     }

//     if (!duplicado) {
//         products.push(pProduct);
//         printOneProduct(pProduct);
//         console.log(products);
//     } else {
//         alert('Producto duplicado');
//     }
// }


function saveProduct(pProduct) {

    let duplicado = products.some(product => product.name === pProduct.name && product.price === pProduct.price && product.photo === pProduct.photo);

    if (!duplicado) {
        products.push(pProduct);
        printOneProduct(pProduct);
        console.log(products);
    } else {
        alert('Producto duplicado');
    }
}

// function filterByPrice(pMinPrice, pMaxPrice, pProductsList) {
//     const productosFiltrados = [];

//     for (let product of pProductsList) {
//         if (product.price >= pMinPrice && product.price <= pMaxPrice) {
//             productosFiltrados.push(product);
//         }
//     }

//     return productosFiltrados;
// }

function filterByPrice(pMinPrice, pMaxPrice, pProductsList) {
    return pProductsList.filter(product => product.price >= pMinPrice && product.price <= pMaxPrice);
}

const filterByPriceV2 = (pMinPrice, pMaxPrice, pProductsList) => pProductsList.filter(product => product.price >= pMinPrice && product.price <= pMaxPrice);