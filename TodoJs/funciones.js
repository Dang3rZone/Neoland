function pintarTareas(pListaTareas, pSection) {
    for (let tarea of tareas) {
        const nuevaTarea = pintarTarea(tarea);
        pSection.appendChild(nuevaTarea);
    }
}

function pintarTarea(pTarea) {
    let div = document.createElement('div');
    // div.classList.add(pTarea.prioridad);
    switch (pTarea.prioridad) {
        case 'baja':
            div.style.backgroundColor = 'green';
            break;
        case 'media':
            div.style.backgroundColor = 'yellow';
            break;
        case 'alta':
            div.style.backgroundColor = 'red';
            break;
    }

    let p = document.createElement('p');
    p.innerText = pTarea.titulo;

    let button = document.createElement('button');
    button.innerText = 'Eliminar';

    button.addEventListener('click', (event) => {
        const indice = tareas.findIndex(tarea => {
            return tarea.id === pTarea.id
        });
        tareas.splice(indice, 1);
        div.remove();
    });

    div.appendChild(p);
    div.appendChild(button);

    return div;
}