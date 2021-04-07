const url = "https://jsonplaceholder.typicode.com/posts";
let sectionBlog = document.querySelector('#blog');

//voy explicar paso a paso lo que es un peticion. El metodo amazon.
let pedido = new XMLHttpRequest();

//abro canal de comunicacion
pedido.open('GET', url, true); //0 
//envio el pedidio

pedido.send(); //1

//estoy escuchando todo el rato los estados de mi pedido.
pedido.addEventListener('readystatechange', cargarInfo);

function cargarInfo(event) {
    if (event.target.readyState == 4 && event.target.status == 200) {
        //console.log(event.target.responseText); //un estado del pedido
        //JSON.parse convierte un string en un array.
        const listaPost = JSON.parse(event.target.responseText)
        console.log(listaPost);
        pintarBlog(listaPost);
    }
}

function pintarBlog(pLista) {
    pLista.forEach(post => {
        sectionBlog.innerHTML += `<article data-id="${post.id}">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </article> `
    })
}
