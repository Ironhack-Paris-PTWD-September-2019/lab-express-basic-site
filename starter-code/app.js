
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// home route:
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home.html');
});

// about route:
app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/views/about.html');
});
//mytea
app.get('/mytea', (request, response, next) => {
    response.sendFile(__dirname + '/views/mytea.html');
  });

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});