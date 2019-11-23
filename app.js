// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));
app.use(express.static('views'));

// our Routes:
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/index.html');
});

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html');
});

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/gallery.html');
});

// Server Started
app.listen(3000, () => {
  console.log('Grumpy cat memorial page');
});