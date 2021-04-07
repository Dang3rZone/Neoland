const fs = require('fs');
const fsPromises = require('fs/promises');

// const files = fs.readdirSync('../pruebas');

fs.readdir('../pruebas', (error, files) => {
    // console.log(files);
});

// console.log('Hola');

// Lectura ficheros
// const content = fs.readFileSync('./ficheros/primero.md', 'UTF-8');

// console.log(content);

fs.readFile('./ficheros/primero.md', 'UTF-8', (err, data) => {
    if (err) {
        throw new Error(err);
    }
    // console.log(data);
});

// readFile con Promesas (then-catch)
fsPromises.readFile('./ficheros/primero.md', 'utf-8')
    .then(data => {
        // console.log(data);
    }).catch(err => {
        console.log(err);
    });

// readFile con Promesas (async await)
(async () => {
    const data = await fsPromises.readFile('./ficheros/primero.md', 'utf-8');
    // console.log(data);
})();



/*
    1 - Crear más ficheros dentro de la carpeta ficheros (.md, .doc, .xls)
    2 - Hay que leer el contenido de todos aquellos ficheros que tengan extensión .md dentro de la carpeta ficheros
        readdir - saber qué ficheros tengo (ARRAY)
        solo me quedo con los que tengan extensión .md
        readFile para leer dichos ficheros
*/
// ASÍNCRONO
fs.readdir('./ficheros', (err, files) => {
    for (let file of files) {
        if (file.endsWith('.md')) {
            fs.readFile(`./ficheros/${file}`, 'utf-8', (err, data) => {
                console.log(data);
            })
        }
    }
});

// SÍNCRONO
const files = fs.readdirSync('./ficheros');
for (let file of files) {
    if (file.endsWith('.md')) {
        const data = fs.readFileSync(`./ficheros/${file}`, 'utf-8');
        console.log(data);
    }
}

// OTRA VERSIÓN
fs.readdir('./ficheros', (err, files) => {
    files.filter(file => file.endsWith('.md')).forEach(file => {
        const data = fs.readFileSync(`./ficheros/${file}`, 'utf-8');
        console.log(data);
    });
});

// if (fs.existsSync('./ficherossfdsf')) {
//     console.log('Sí existe');
// } else {
//     console.log('No existe');
// }
