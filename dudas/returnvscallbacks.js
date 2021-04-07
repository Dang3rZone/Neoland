function sumar(a, b) {
    return a + b;
}

function sumarRetardo(a, b, done) {
    setTimeout(() => {
        done(a + b);
    }, 3000);
}

function sumarRetardoPromise(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 3000);
    })
}

sumarRetardo(8, 9, function (resultado) {
    console.log('TERMINA LA SUMA ' + resultado);
})

sumarRetardoPromise(5, 6)
    .then(res => console.log(res));

// a = 8
// b = 9
// done = function (resultado) {
//  console.log('TERMINA LA SUMA ' + resultado);
// }

addEventListener('click', function (event) {

})

setTimeout(() => {

}, 3000);

sumar('hola', 'adios');