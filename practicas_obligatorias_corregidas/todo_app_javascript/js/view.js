/*
* Pintar la lista de tareas desde localStorage
*/
const todoList = document.querySelector('.todo-list');

//primero pinto la lista que se almacena en el localStorage usando un callback
// printTask(getTaskListStorage());
printTask(tareas);
function printTask(pTask) {
    todoList.innerHTML = "";
    //si la lista esta vacia pinto un mensaje de no hay tareas
    if (pTask.length == 0) {
        todoList.innerHTML = `<li>
                                    <div class="form-check">
                                            <h4>
                                                NO HAY TAREAS
                                               </h4>
                                        </div>
                                    </li>`;
    }
    pTask.forEach(task => printOneTask(task));
}

/* ----------------------------------------------- */

function printOneTask(pTask) {
    //creo los elementos de la tarea
    const li = document.createElement('li');
    const div = document.createElement('div');
    const label = document.createElement('label');
    const iDelete = document.createElement('i');
    const inputCheck = document.createElement('input');
    const iHelper = document.createElement('i');

    //texto de tarea
    const taskTextTitle = document.createTextNode(pTask.title);

    //añado atributos de clase y demas propiedades
    li.classList.add(pTask.category);
    div.classList.add('form-check');
    label.classList.add('form-check-label');
    iDelete.classList.add('remove', 'mdi', 'mdi-close-circle-outline');
    inputCheck.classList.add('checkbox');
    inputCheck.type = "checkbox";
    iHelper.classList.add('input-helper');

    //añado el data-id al boton de borrar para luego poderlo recoger
    iDelete.dataset.id = pTask.id;
    inputCheck.dataset.id = pTask.id;

    //añado los elementos uno dentro de otros en orden

    label.appendChild(inputCheck);
    label.appendChild(taskTextTitle);
    label.appendChild(iHelper);

    div.appendChild(label);
    li.appendChild(div);
    li.appendChild(iDelete);

    //añado el listener al boton de borrar para crear el evento de borrar la tarea
    iDelete.addEventListener('click', deleteTask);

    //añado el listener al checkbox para hacer la accion de completar la tarea.
    inputCheck.addEventListener('change', updateTask);

    //añado la tarea complete a la seccion que he capturado arriba.

    todoList.appendChild(li);
}


/* ----------------------------------------------- */
/*
* Añadir tarea
*/

const inputTitle = document.querySelector('#inputTitle');
const selectCategory = document.querySelector('#selectCategory');
const btnAdd = document.querySelector('#btnAdd');
const alert = document.querySelector('#alert');


btnAdd.addEventListener('click', getDataForm);
function getDataForm(event) {
    event.preventDefault();
    alert.innerHTML = "";
    //recojo los valores del formulario
    const title = inputTitle.value;
    const category = selectCategory.value;

    if (title === "" || category === "") {
        alert.innerHTML = getAlert(1);
        return;
    }

    let result = addTask(title, category);
    alert.innerHTML = getAlert(result);
}

/* ----------------------------------------------- */
/*
* Borrar tarea
*/

function deleteTask(event) {
    //primero borro la tarea del array
    let idTask = event.target.dataset.id;
    const taskList = getTaskListStorage();
    const positionDelete = taskList.findIndex(task => task.id === idTask);
    taskList.splice(positionDelete, 1);
    localStorage.setItem('tasklist', JSON.stringify(taskList));

    printTask(taskList);

}

/* ----------------------------------------------- */


/*
* filtrar por prioridad o categoria
*/
const filterCategory = document.querySelector('#priority');
filterCategory.addEventListener('change', getDataFilterCategory)

function getDataFilterCategory() {

    const category = filterCategory.value;
    if (category === "") {
        printTask(getTaskListStorage())
        //el return evita que tengamos que hacer un else ya que acaba ahi la funcion y no pinta los siguiente al if.
        return;
    }

    const taskList = filterByCategory(category);
    printTask(taskList);
}

/* ----------------------------------------------- */

/*
* funcion que recoge la palabra a buscar
*/

const inputSearch = document.querySelector('#search');
inputSearch.addEventListener('input', getDataSearch);

function getDataSearch(event) {

    let word = event.target.value;
    const taskList = searchByWord(word);
    printTask(taskList);

}


/* ----------------------------------------------- */
/*
* funcion que completa la tarea pero no la borra, simplement la pone en status true y pone la clase complete al elemento.
*/

function updateTask(event) {
    //obtengo el li que contiene el checkbox correspondiente, para ello tengo que subir en el arbol de nodos al label -> div -> li (tres parentNode)
    const taskUpdate = event.target.parentNode.parentNode.parentNode;
    taskUpdate.classList.toggle('completed');

    const taskList = getTaskListStorage();
    const task = taskList.find(task => task.id === parseInt(event.target.dataset.id));

    task.status = !task.status;
    localStorage.setItem('tasklist', JSON.stringify(taskList));

}




/* ----------------------------------------------- */
/*
* funcion que retorna un mensaje en funcion del valor que le introduzcamos como parametro
*/
function getAlert(pNumber) {
    let alert = "";
    switch (pNumber) {
        case 1:
            alert = `<div class="alert alert-danger" role="alert">
                         Los campos no pueden ser vacios.
                    </div>`;
            break;
        case 2:
            alert = `<div class="alert alert-danger" role="alert">
                        La tarea ya existe
                    </div>`;
            break;
        case 3:
            alert = `<div class="alert alert-success" role="alert">
                       Tarea guardada correctamente
                    </div>`;
            break;
    }
    return alert;
}

/* ----------------------------------------------- */
/*
* funcion quitar las alertas cuando nos enfocamos en algun campo.
*/

inputTitle.addEventListener('focus', deleteAlert);
selectCategory.addEventListener('focus', deleteAlert);
filterCategory.addEventListener('focus', deleteAlert)

function deleteAlert() {
    alert.innerHTML = "";
}


