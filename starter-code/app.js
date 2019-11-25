const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', function (request, response, next) {
  console.log(request);

  response.sendFile(__dirname + '/views/index.html');
})

app.get('/about', function (request, response, next) {
  console.log(request);

  response.sendFile(__dirname + '/views/about.html');
})

app.get('/gallery', function (request, response, next) {
  console.log(request);

  response.sendFile(__dirname + '/views/gallery.html');
})

app.listen(3000);