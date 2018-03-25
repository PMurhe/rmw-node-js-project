
var express = require('express');
var app     = express();
var router = express.Router();
var  db = require('../dbConnection.js');


router.post('/saveProductMasterDetails', function(req, res) {
	var productMasterJson  = req.body.productMasterDetails;
	var productAttributeJson = req.body.productAttributes;	
	console.log(productMasterJson);;
	if(productMasterJson!=''){
		var productName = productMasterJson.productName;
		var basePrice = productMasterJson.basePrice;
		var description = productMasterJson.description;

		productName = ( productName != null) ? "'"+productName+"'" : null;
		basePrice = ( basePrice != null) ? ""+basePrice+"" : null;
		description = ( description != null) ? "'"+description+"'" : null;

		var query = "insert into product_master(product_name,base_price,description) values ("+productName+","+basePrice+","+description+")";
		console.log(query);

		db.query(query,function(err,dbres){
			if(err){
				console.log(err);
				res.send(err);
			}
			else if (dbres!= '' && dbres != null){
				console.log(dbres);
				res.send(JSON.stringify({"result":"success"}));  
			}
			else{
				console.log(dbres);
				res.send(JSON.stringify({"result":"Unable to save"}));  
			}
		});
  }
	else{
		res.send('Please Enter values to save');
	}

});


	
	
module.exports = router;