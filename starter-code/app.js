// PKG
const express = require("express");

// APP
const app = express();

// RESSOURCES
app.use(express.static("public"))

// ROUTES
app.get("/", function (req, res, next) {

    res.sendFile(__dirname + "/views/index.html")
})

app.get("/about", function (req, res, next) {

    res.sendFile(__dirname + "/views/about.html")
})

app.get("/gallery", function (req, res, next) {

    res.sendFile(__dirname + "/views/gallery.html")
})


// PORT
app.listen(5000)