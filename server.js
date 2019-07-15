// import needed modules
var express = require('express');
var path = require('path');

// initialize express
var app = express();

// get port from computer or use 8080
var PORT = process.env.PORT || 8080;

// middleware for handling json data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("app/public"));

// api and html routing tracks
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// start server
app.listen(PORT , function() {
  console.log("App listening on PORT " + PORT);
});