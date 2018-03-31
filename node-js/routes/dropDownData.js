var express = require('express');
var app     = express();
var router = express.Router();
var queryUtils = require('../db/queryUtils');


router.get('/getDropDownData',function(req,res){

	queryUtils.methods.getDropDownData( function(err,dbres){
		if(err){
			res.send(err);
		}else if(dbres != null && dbres !=''){
			res.send(JSON.stringify({"result":dbres}));
		}else{
			res.send(JSON.stringify({"result":"Unable to get Data"}));
		}
	});
});

module.exports = router;