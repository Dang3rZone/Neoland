- Recuperar todos los escritores y mostrarlos en la vista
    SERVICIO
    1 - Crear servicio (EscritoresService) X
    2 - En el servicio un método (**getAll**) que recupere los escritores del array X
    
    COMPONENTE
    3 - Inyectar el servicio en el componente X
    4 - en ngOnInit ejecuta el método X 

    5 - Crear una variable (**listaEscritores**) que pueda usar en el HTML X
    6 - El dato que me devuelva el método anterior lo coloco en esa variable X
    7 - Maquetar la vista con los datos que recuperamos X

/escritores/8
/escritores/9
- Mostrar el detalle del escritor dentro del componente Detalle
    1 - Crear método en el servicio que me recupere escritores por ID X
    2 - Inyectar el servicio dentro del componente X
    3 - Recuperar el id del escritor seleccionado de la URL X
        - ActivatedRoute
    4 - Llamar al método con el id del paso anterior X
    5 - Mostrar los datos en el HTML X


CICLO DE VIDA COMPONENTE

Definición de propiedades 
|
constructor 
|
onChanges - definen los inputs 
|
Mostrar el HTML (escritor = undefined)
| 
ngOnInit() - (getById)

- Recuperar los libros de cada escritor cuando accedamos a la ruta /escritores/8/libros
    1 - En LibrosService crear el método getByEscritor 40% X
    2 - Crear componente ListaLibros 5% X
    3 - Definir la ruta hija en el fichero de routing 20% X
    4 - Llamar al método getByEscritor cuando se muestre el componente ListaLibros 35%