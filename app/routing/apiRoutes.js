var friends = require('../data/friends.js')

module.exports = function(app) {

  // dumps the whole friends array to the browser
  app.get('/api/friends', function(request, response) {
    return response.json(friends);
  });
  
  // takes in a newFriend from the survey site
  app.post('/api/friends', function(request , response) {
    
    // get the survey results
    var newFriend = request.body;

    // tracking variables
    var difference = 0;
    var lowestIndex = 0;
    var lowestDifference = 50; // greatest possible is 40
    
    // log newFriend to the console
    console.log(`Finding a friend for ${newFriend.name}`);

    // compare the scores of each friend to the newFriend
    friends.forEach(function(friend , index) {
      difference = 0;

      // add up the differences between each answer
      for (i = 0 ; i < friend.scores.length; i++) {
        // console.log(`${difference} + ${parseInt(friend.scores[i])} - ${parseInt(newFriend.scores[i])}`);
        difference += Math.abs(parseInt(friend.scores[i]) - parseInt(newFriend.scores[i]));
      }

      // then check if it is the lowest so far
      if (difference < lowestDifference) {
        lowestDifference = difference;
        lowestIndex = index;
      }
    });

    // log the match to the console
    console.log(`Found ${JSON.stringify(friends[lowestIndex].name)} at [${lowestIndex}] with a difference of ${lowestDifference}`);

    // add the newFriend to the friend array
    friends.push(newFriend);

    // send the matched friend back to the site
    response.json(friends[lowestIndex]);

  });
  
};