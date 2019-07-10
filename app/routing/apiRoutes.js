var friends = require('../data/friends.js')

module.exports = function(app) {

  app.get('/api/friends', function(request, response) {
    return response.json(friends);
  });
  
  app.post('/api/friends', function(request , response) {

    var newFriend = request.body;
    var difference = 0;
    var lowestIndex = 0;
    var lowestDifference = 0;
    
    console.log(newFriend);

    friends.forEach(function(friend , index) {
      for (i = 0 ; i < friend.scores.length; i++) {
        difference += Math.abs(parseInt(friend.scores[i]) - parseInt(newFriend.scores[i]));
        if (difference < lowestDifference) {
          lowestDifference = difference;
          lowestIndex = index;
        }
      }
    });

    console.log(`friends[${lowestIndex}]: ${JSON.stringify(friends[lowestIndex])}`);

    friends.push(newFriend);

    response.json(friends[lowestIndex]);
    
  });


};