
var express = require('express');
var app     = express();
var router = express.Router();
var  db = require('../dbConnection.js');


router.get('/getProductName', function(req, res) {
	var productName  = req.query.productName;

	if(productName!=''){

		var query = "select product_code,product_name from product_master where lower(product_name) like lower('"+productName+"%')";

		db.query(query,function(err,dbres){
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