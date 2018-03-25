
var express = require('express');
var app     = express();
var router = express.Router();
var queryUtils = require('../db/queryUtils');

router.get('/getProductName', function(req, res) {
	var productName  = req.query.productName;

	if(productName!='' && productName!=null){
		queryUtils.methods.getProductName(productName,function(err,dbres){
			if(err){
				res.send(err);
			}
			else if (dbres!= '' && dbres != null){
				res.send(JSON.stringify({"result":dbres}));  
			}
			else{
				res.send(JSON.stringify({"result":"Unable to fetch data"}));  
			}
		});
  	}
	else{
		res.send('Product Name cannot be empty');
	}
});
	
module.exports = router;