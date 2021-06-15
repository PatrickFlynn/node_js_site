//import required packages
const express = require('express');
const app = express();
const data = require('./data.json');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const data = require('./data.json');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

//Index route
app.get('/', (req, res) => {
	res.render('index', {data});
});

//About route
app.get('/about', (req, res) => {
	res.render('about');
});

//Project page
app.get('/project/:projectid', (req, res) => {
	res.render('project', {data, projectid: req.params.projectid});
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;