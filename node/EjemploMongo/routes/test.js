const router = require('express').Router();
const Persona = require('../models/Persona');

router.get('/save', (req, res) => {
    // Insertar una nueva Persona a partir de una instancia de clase
    const pers = new Persona();
    pers.nombre = 'Rosita';
    pers.apellidos = 'Gómez';
    pers.email = 'rosita_89@hotmail.com';
    pers.edad = 34;
    pers.save()
        .then(doc => {
            res.json(doc);
        })
        .catch(error => console.log(error));
});

router.get('/create', async (req, res) => {
    const doc = await Persona.create({
        nombre: 'Luis',
        apellidos: 'González',
        email: 'luis_cuenca@hotmail.com',
        edad: 42
    });
    res.json(doc);
});

router.get('/find', (req, res) => {
    Persona.find().then(docs => res.json(docs));
});

router.get('/find_v2', async (req, res) => {
    // Select * from personas where edad > 18 and edad < 50
    const docs = await Persona.find({
        edad: { $gt: 18, $lt: 50 }
    });
    res.json(docs);
});

module.exports = router;
