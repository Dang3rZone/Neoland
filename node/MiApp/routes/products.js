const router = require('express').Router();

// http://localhost:3000/products
router.get('/', randomMiddleware, (req, res) => {
    const arrProductos = [
        { nombre: 'Ordenador', precio: 1200, departamento: 'Informatica' },
        { nombre: 'Lavadora', precio: 234, departamento: 'Hogar' },
        { nombre: 'Microondas', precio: 199, departamento: 'Hogar' },
        { nombre: 'Camara Fotos', precio: 876, departamento: 'Fotografía' }
    ];
    res.json(arrProductos);
});

// http://localhost:3000/products/detail
router.get('/detail', randomMiddleware, (req, res) => {
    res.send('Petición GET /products/detail');
});

// http://localhost:3000/products/3434
router.get('/:productId', (req, res) => {
    console.log(req.params);
    res.send('Petición get para un producto concreto');
});

// http://localhost:3000/products
router.post('/', (req, res) => {
    console.log(req.body.nombre);
    res.send('Petición POST /products');
});

router.put('/edit', (req, res) => {
    res.send('Petición PUT /products/edit');
});

// Middleware Random
function randomMiddleware(req, res, next) {
    const randomNum = Math.random();
    console.log(randomNum);
    if (randomNum > 0.6) {
        res.send('El número aleatorio no te deja pasar');
    } else {
        next();
    }
};

module.exports = router;