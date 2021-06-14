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

app.get('/project/:projectid', (req, res) => {
	res.render('project', {data, projectid: req.params.projectid});
})

app.listen(3000, () => {
	console.log('Express listening on localhost port 3000!');
})