var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API and HTML routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// app.get('/routing', function(request , response) {
//   response.send("Routing also works!");
// });

// app.get('/signal', function(request , response) {
//   response.sendFile(path.join(__dirname, "index.html"));
// });

// app.get('/' , function(request , response) {
//   response.send("This server works!");
// });

// app.post('/submit', function(request , response) {
//   var signal = request.body;
//   // console.log(request.params);
//   console.log(signal);

//   response.json("This is the signal: " + signal.data);
// });

app.listen(PORT , function() {
  console.log("App listening on PORT " + PORT);
});