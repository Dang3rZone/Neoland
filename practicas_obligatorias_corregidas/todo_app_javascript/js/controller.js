/* ----------------------------------------------- */

/*
* funcion que sirve para obtener el array del localStorage, es algo que vamos hacer muchas veces en * la practica y conviene encapsularlo en un función.
*/
function getTaskListStorage() {
    const taskList = JSON.parse(localStorage.getItem('tasklist'));
    if (taskList !== null) {
        return taskList
    } else {
        return [];
    }

}

/* ----------------------------------------------- */

/*
* funcion que sirve para obtener el ultimo id del array;
*/
function getLastId() {
    const taskList = JSON.parse(localStorage.getItem('tasklist'));
    //obtengo el ultimo elemento del array
    console.log(taskList);
    if (taskList !== null && taskList.length !== 0) {
        const lastTask = taskList.pop();
        return lastTask.id;
    } else {
        return 0;
    }

}

/* ----------------------------------------------- */

/*
* funcion que añade un elemento al array, y comprueba que no existe dentro de la lista.
*/

function addTask(pTitle, pCategory) {
    const newTask = new Tarea(getLastId() + 1, pTitle, pCategory);

    const taskList = getTaskListStorage();
    const existTask = taskList.some(task => task.title === newTask.title && task.category === newTask.category);
    if (!existTask) {
        taskList.push(newTask);
        localStorage.setItem('tasklist', JSON.stringify(taskList));
        printOneTask(newTask);
        return 3;
    } else {
        return 2;
    }
}



/* ----------------------------------------------- */

/*
* function de filtrado por categoria.
*/

function filterByCategory(pCategory) {
    const taskList = getTaskListStorage();
    const listResult = taskList.filter(task => task.category === pCategory);
    return listResult;
}

/* ----------------------------------------------- */

/*
*  funcion que busca una palabra dentro del titulo de la lista de tareas
*/

function searchByWord(pWord) {
    const taskList = getTaskListStorage();
    const listResult = taskList.filter(task => task.title.toLowerCase().includes(pWord.toLowerCase()));
    console.log(listResult);
    return listResult;
}