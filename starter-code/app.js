const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/',function(request, response,next){
  response.sendFile(__dirname + '/views/homepage.html')
});

app.get('/about', function(request, response,next){
  response.sendFile(__dirname + '/views/about.html')
});

app.get('/gallery', function(request, response,next){
  response.sendFile(__dirname + '/views/gallery.html')
});
app.get('/homepage', function(request, response,next){
  response.sendFile(__dirname + '/views/homepage.html')
});
app.listen(3001);