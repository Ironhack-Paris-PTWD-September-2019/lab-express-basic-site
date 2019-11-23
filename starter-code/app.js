const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/' , function(req , res ,next) {
    res.sendFile(__dirname + '/views/index.html')
});
app.get('/about' , function(req , res ,next) {
    res.sendFile(__dirname + '/views/about.html')
});
app.get('/photo' , function(req , res ,next) {
    res.sendFile(__dirname + '/views/photo.html')
});

app.listen(3000);