
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

app.set('views', __dirname + '/views');

app.set('view engine', 'hbs');

// home route:
app.get('/', (request, response, next) => {
  response.render('home');
});

// about route:
app.get('/about', (request, response, next) => {
  response.render('about');
});
//mytea
app.get('/mytea', (request, response, next) => {
    response.render('mytea');
  });

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});