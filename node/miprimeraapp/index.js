const express = require('express');

// Cargar configuración de entorno
require('dotenv').config();

const app = express();

// GET http://localhost:3000
app.get('/', (req, res) => {
    res.end('Petición GET localhost:3000');
});

// GET http://localhost:3000/otro
app.get('/otro', (req, res) => {
    res.end('Estoy en la pagina OTRO');
});

// POST http://localhost:3000/productos
app.post('/productos', (req, res) => {
    res.end('Estoy en la petición POST');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server escuchando en el puerto ' + port);
});