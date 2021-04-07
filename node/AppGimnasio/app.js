const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

// Conexión Base de datos
require('./dbConfig')();

/*
  PRUEBA DE CONEXIÓN A LA BASE DE DATOS
*/
// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'root',
//   port: 8889, // 3306
//   database: 'gimnasios'
// });

// connection.connect((err) => {
//   console.log(err);
//   console.log('Estás conectado');
//   connection.query('SELECT * FROM clientes', (err, rows) => {
//     console.log(rows);
//   })
// });

/*
  FIN PRUEBA DE CONEXIÓN A LA BASE DE DATOS
*/



const indexRouter = require('./routes/index');
const clientesRouter = require('./routes/clientes');
const apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/clientes', clientesRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;