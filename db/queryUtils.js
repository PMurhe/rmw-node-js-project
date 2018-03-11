const  db = require('../dbConnection.js');

var methods  = {
	
	login : function(user_name,password,callback){
		var query = "select user_id,user_name, password_expiry_date from user_master where user_name = '" + user_name + "' and user_password = '"+password+"'";
		db.query(query,function(err,dbres){
			if(err){
				callback(err,null);
			}
			else if (dbres!= '' && dbres != null){
				callback(null,dbres);
			}
			else{
				callback(null,null);
			}
		});
	},

	saveProductIntakeDetails : function(productIntakeId,productId,quantity,price,purchaseDate,callback){
		if(productIntakeId!=0){
			var query = "update product_intake set quantity = "+quantity+" where product_intake_id = "+productIntakeId;
		}
		else{
			var query = "insert into product_intake(product_code,quantity,price,purchase_date) values ("+productId+","+quantity+","+price+","+purchaseDate+")";	
		}		
		console.log(query);
		db.query(query,function(err,dbres){
			if(err){
				callback(err,null);
			}
			else if (dbres!= '' && dbres != null){
				callback(null,dbres);
			}
			else{
				callback(null,null);
			}
		});
	},

	getProductName : function(productName,callback){
		var query = "select product_code,product_name from product_master where lower(product_name) like lower('"+productName+"%')";

		db.query(query,function(err,dbres){
			if(err){
				callback(err,null);
			}
			else if (dbres!= '' && dbres != null){
				callback(null,dbres);
			}
			else{
				callback(null,null);
			}
		});
	}

}

module.exports = {
	methods
}