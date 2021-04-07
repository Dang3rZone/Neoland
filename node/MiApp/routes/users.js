var router = require('express').Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', (req, res) => {
  res.send('Estoy en USERS NEW');
});

module.exports = router;