module.exports = function(app) {

  
  app.post('/submit', function(request , response) {
    var signal = request.body;
    // console.log(request.params);
    console.log(signal);
    
    response.json("This is the signal: " + signal.data);
  });


};