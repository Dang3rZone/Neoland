//quiero una funcion que me pinte un unico animal, por el metodo de crear elementos dom. NO QUIERO TEMPLATE LITERAL.
/*
    <article>
        <h3>Nombre del animal</h3>
        <p>Peligrosidad: 3</p>
    </article>
*/

let sectionPeligroso = document.querySelector('.peligrosos .flex');
let sectionCuidado = document.querySelector('.cuidado .flex');
let sectionDociles = document.querySelector('.dociles .flex');


function printOneAnimal(pAnimal, pSection) {

    //crear elementos de html
    let article = document.createElement('article'); //<article></article>
    let h3 = document.createElement('h3');//<h3></h3>
    let p = document.createElement('p') //<p></p>
    article.id = 'item' + pAnimal.id;
    //crear contenido de texto
    let contenth3 = document.createTextNode(pAnimal.raza);
    let contentp = document.createTextNode('Peligrosidad:' + pAnimal.peligrosidad);

    //meter el texto dentro de sus etiquetas
    h3.appendChild(contenth3);
    p.appendChild(contentp);

    //meter dentro del article el h3 y el p
    article.appendChild(h3);
    article.appendChild(p);

    //meter article dentro de la seccion selecciona como parametro
    pSection.appendChild(article);
}

//pintar toda la lista de animales 

function printListAnimal(pListAnimal) {
    pListAnimal.forEach(animal => {
        let seccion;
        switch (animal.peligrosidad) {
            case 1:
                seccion = sectionDociles;
                break;

            case 2:
                seccion = sectionCuidado;
                break;

            case 3:
                seccion = sectionPeligroso;
                break
        }

        printOneAnimal(animal, seccion);
    });
}
printListAnimal(animales);

//borrar una animal. Condicion, el animal se tiene que borrar tanto del interfaz como de la lista o array.

function deleteAnimal(pId, pListAnimal) {

    //borrar del array
    //busco la posicion del elemento cuyo id es el que pasan por parametro

    let posicionBorrar = pListAnimal.findIndex(animal => {
        return animal.id == pId;
    })

    pListAnimal.splice(posicionBorrar, 1)
    console.log(animales);

    //borrar del interfaz
    let elementoDomBorrar = document.querySelector('#item' + pId);
    elementoDomBorrar.parentNode.removeChild(elementoDomBorrar);

}

deleteAnimal(4, animales);