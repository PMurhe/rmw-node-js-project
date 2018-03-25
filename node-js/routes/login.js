
const express = require('express');
const app     = express();
const router = express.Router();
const base64 = require('base-64');
var datetime = require('node-datetime');
var queryUtils = require('../db/queryUtils');

router.post('/login', function(req, res) {
	var user_name  = req.body.user_name;
	var password = req.body.password;
	password = base64.encode(password);

	var dt = datetime.create();
	var currentDate = dt.format('Y-m-d');
	
	if(user_name!=null && user_name!='' && password!=null && password!=''){

		queryUtils.methods.login(user_name,password,function(err,dbres){
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
	}
	else{
		res.send({"result":"user_name or password cannot be null"});
	}
		
    
});

module.exports = router;