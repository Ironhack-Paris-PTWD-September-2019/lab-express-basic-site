const express = require('express');
const app = express();

app.use(express.static('public'));

// our first Route:
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html');
  });
  
  // cat route:
  app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about-page.html');
  });

  app.get('/photo-gallery', (request, response, next) => {
    response.sendFile(__dirname + '/views/photo-gallery-page.html');
  });


  
  // Server Started
  app.listen(3002, () => {
    console.log('My first app listening on port 3002!');
  });