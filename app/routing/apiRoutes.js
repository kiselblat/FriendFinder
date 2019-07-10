var friends = require('../data/friends.js')

module.exports = function(app) {

  app.get('/api/friends', function(request, response) {
    return response.json(friends);
  });
  
  app.post('/api/friends', function(request , response) {
    var newFriend = request.body;
    
    console.log(newFriend);
    
    response.json("New friend: " + newFriend);
  });


};