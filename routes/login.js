
var express = require('express');
var app     = express();
var router = express.Router();
var  db = require('../dbConnection.js');


router.post('/login', function(req, res) {
	var user_name  = req.body.user_name;
	var password = req.body.password;

	var query = "select * from user_master where user_name = '" + user_name + "' and user_password = '"+password+"'";
	console.log(query);

		db.query(query,function(err,dbres){
			if(err){
				res.send(err);
			}
			else if (dbres!= '' && dbres != null){
				res.send(JSON.stringify({"result":"success"}));  
			}
			else{
				res.send(JSON.stringify({"result":"Login Failed - Incorrect userId / password!"}));  
			}
		});
    
});

module.exports = router;