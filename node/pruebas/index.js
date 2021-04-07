const chalk = require('chalk');
const axios = require('axios');
const spanishcities = require('spanishcities');

console.log(chalk.red.bgBlueBright('Welcome to Node! Yeah!'));

axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
        // console.log(response.data);
    });

const cities = spanishcities.getCities(28);
// console.log(cities);

// console.log(__dirname);
// console.log(__filename);
console.log(process.argv);
