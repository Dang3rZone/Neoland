//Destructuring objetos sirve para extraer información de un objeto. Principalmente para JSON.

const aprendiendoJS = {
    version: {
        nueva: 'ES10',
        anterior: 'ES9',
        antigua: 'ES5'
    },
    frameworks: ['React', 'Angular', 'Vue', 'Svelte']
}
//version antigua
let versionNueva = aprendiendoJS.version.nueva; //ES10
let angular = aprendiendoJS.frameworks[1]; //angular

//destructuring

let { version, frameworks } = aprendiendoJS;
console.log(version, frameworks);

//versiones de javascript

let { nueva, antigua, anterior } = aprendiendoJS.version

console.log(anterior, antigua, nueva);


export { aprendiendoJS }