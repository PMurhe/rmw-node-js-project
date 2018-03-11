
var express = require('express');
var app     = express();
var router = express.Router();
var queryUtils = require('../db/queryUtils');

router.post('/saveProductIntakeDetails', function(req, res) {
	var productIntakeJson  = req.body.productIntakeDetails;

	console.log(productIntakeJson);;
	if(productIntakeJson!=''){
		var productIntakeId = productIntakeJson.productIntakeId;
		var productId = productIntakeJson.productCode;
		var quantity = productIntakeJson.quantity;
		var price = productIntakeJson.price;
		var purchaseDate = productIntakeJson.purchaseDate;

		purchaseDate = ( purchaseDate != null) ? "'"+purchaseDate+"'" : null;
		queryUtils.methods.saveProductIntakeDetails(productIntakeId,productId,quantity,price,purchaseDate,function(err,dbres){
			if(err){
				res.send(err);
			}
			else if (dbres!= '' && dbres != null){
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