var friendData = require("../data/friends.js");

module.exports = function(app){

	//fetching data from friendData object
	app.get("api/friends", function(req, res){
		res.json(friends);


	});



	// posting data to friendData object
	app.post("api/friends", function(req, res){



      tableData.push(req.body);
      res.json(true);
        
	});


  app.post("/api/clear", function() {
  
    friendData = [];
   

    console.log(friendData);
  });

}