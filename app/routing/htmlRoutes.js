var path = require('path');

module.exports = function(app) {

  
  app.get('/routing', function(request , response) {
    response.send("Routing also works!");
  });
  
  app.get('/signal', function(request , response) {
    console.log(__dirname + "index.html")
    response.sendFile(path.join(__dirname , "/../public/index.html"));
  });
  
  app.get('/' , function(request , response) {
    response.send("This server works!");
  });


};