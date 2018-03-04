
var express = require('express');
var app     = express();
var router = express.Router();
var  db = require('../dbConnection.js');


router.post('/saveProductIntakeDetails', function(req, res) {
	var productIntakeJson  = req.body.productIntakeDetails;

	console.log(productIntakeJson);;
	if(productIntakeJson!=''){
		var productCode = productIntakeJson.productCode;
		var quantity = productIntakeJson.quantity;
		var price = productIntakeJson.price;
		var purchaseDate = productIntakeJson.purchaseDate;

		purchaseDate = ( purchaseDate != null) ? "'"+purchaseDate+"'" : null;

		var query = "insert into product_intake(product_code,quantity,price,purchase_date) values ("+productCode+","+quantity+","+price+","+purchaseDate+")";
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
				res.send(JSON.stringify({"result":"Unable to save"}));  
			}
		});
  }
	else{
		res.send('Please Enter values to save');
	}

});
	
module.exports = router;