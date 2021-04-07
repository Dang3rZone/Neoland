const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('students', {
        mensaje: 'Hola caracola',
        clases: ['uno', 'dos', 'tres'],
        productos: 0
    });
});

router.get('/new', (req, res) => {
    res.render('formulario', {
        nombres: ['Lucía', 'Rodrigo', 'Víctor', 'Laura']
    });
});

module.exports = router;