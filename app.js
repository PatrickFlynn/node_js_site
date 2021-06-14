//import required packages
const express = require('express');
const app = express();
const data = require('./data.json');

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

//Custom 404 error handling
app.use(function (req, res, next) {
	err = new Error('404 Error!')
    err.status = 404;
    err.message = "That page does not exist!"
    console.log(`Error ${err.status} - ${err.message}! `)
    res.render('error', {err});
});

// error handler middleware
app.use((error, req, res, next) => {
 console.log('There was an internal server error!')
 console.error(error.stack);
 res.status(500).send('Internal Server Error! Please Contact the webmaster!');
})

//default port for testing is 3000
app.listen(3000, () => {
	console.log('Express listening on localhost port 3000!');
})