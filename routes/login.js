
const express = require('express');
const app     = express();
const router = express.Router();
const  db = require('../dbConnection.js');
const base64 = require('base-64');
var datetime = require('node-datetime');

router.post('/login', function(req, res) {
	var user_name  = req.body.user_name;
	var password = req.body.password;
	password = base64.encode(password);

	var dt = datetime.create();
	var currentDate = dt.format('Y-m-d');
	
	//console.log(currentDate);
	var query = "select user_id,user_name, password_expiry_date from user_master where user_name = '" + user_name + "' and user_password = '"+password+"'";
	//console.log(query);

		db.query(query,function(err,dbres){
			if(err){
				res.send(err);
			}
			else if (dbres!= '' && dbres != null){
				(dbres[0].password_expiry_date > currentDate) ? res.send(JSON.stringify({"result":dbres})) : res.send(JSON.stringify({"result":"Password Expired - contact System Admin!"}))
			}
			else{
				res.send(JSON.stringify({"result":"Login Failed - Incorrect userId / password!"}));  
			}
		});
    
});

module.exports = router;