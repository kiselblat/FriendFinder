// import required packages
var path = require('path');

// wrap up the routes so they can be used by server.js
module.exports = function(app) {

  // when user surfs to / they are sent home.html
  app.get('/' , function(request , response) {
    response.sendFile(path.join(__dirname , "/../public/home.html"));
  });
  
  // when user surfs to /survey they are sent survey.html
  app.get('/survey', function(request , response) {
    // console.log(__dirname + "index.html")
    response.sendFile(path.join(__dirname , "/../public/survey.html"));
  });

  // when user surfs to /anywhereElse they are redirected to /
  app.get('*',function (request, response) {
    response.redirect('/');
});

};