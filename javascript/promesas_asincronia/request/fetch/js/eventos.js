let buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', getSection));
let sectionContent = document.querySelector('#content');
let divPagination = document.querySelector('#pagination');

function getSection(event) {
    getData(1, event.target.id);
}

function printCharacter(pCharacterList, pPrev, pNext) {
    sectionContent.innerHTML = "";
    divPagination.innerHTML = "";

    printPagination(pPrev, pNext, 'character');

    pCharacterList.forEach(character => {

        sectionContent.innerHTML += `<article id="character${character.id}">
                <figure>
                    <img src="${character.image}">
                </figure>
                <h2>${character.name}</h2>
                <h4>${character.status}</h4>
                <h5>Episodios donde aparece</h5>
            </article>`;
        let article = document.querySelector(`#character${character.id}`);

        let ul = document.createElement('ul');
        //dentro de cada caracter hay un array con todos los episidios en los aparece. Recorro ese array y pinto los episodios
        character.episode.forEach(episode => {

            let li = document.createElement('li');
            let a = document.createElement('a');
            a.href = episode;
            //parto el string por la /
            const arrayText = episode.split('/');
            let textoEnlace = arrayText.pop();
            a.innerText = "Episodio" + textoEnlace;
            li.appendChild(a);
            ul.appendChild(li);
        })

        article.appendChild(ul);

    })
}

function printEpisodes(pEpisodesList, pPrev, pNext) {

    sectionContent.innerHTML = "";
    divPagination.innerHTML = "";

    printPagination(pPrev, pNext, 'episode');

    pEpisodesList.forEach(episode => {

        sectionContent.innerHTML += `<article>
                    <h2>${episode.name}</h2>
                    <ul>
                        <li>Fecha lanzamiento: ${episode.air_date}</li>
                        <li>Codigo de Episodio: ${episode.episode}</li>  
                    </ul>  
        </article>`;

    })

}

function printPagination(pPrev, pNext, pSection) {
    //tengo que pintar dos botones de anterior y siguiente
    let btnNext = document.createElement('button');
    let btnPrev = document.createElement('button');
    btnPrev.dataset.page = pPrev;
    btnNext.dataset.page = pNext;
    btnNext.innerText = 'Siguiente ' + pNext;
    btnPrev.innerText = 'Anterior ' + pPrev;

    //funciones de callback en eventos, a un evento se le puede pasar un funcion anonima (arrow), esto me evita tener que crear funciones con los mismo valores, dado que a los event handlers no pueden recibir parametros
    btnNext.addEventListener('click', event => {
        let page = event.target.dataset.page;
        getData(page, pSection)
    })


    btnPrev.addEventListener('click', event => {
        let page = event.target.dataset.page
        getData(page, pSection);
    });

    if (pPrev != null) {
        divPagination.appendChild(btnPrev);
    }
    if (pNext != null) {
        divPagination.appendChild(btnNext);
    }
}