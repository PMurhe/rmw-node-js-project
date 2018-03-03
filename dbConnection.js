var mysql = require('mysql');

var con = mysql.createConnection({
  "host": "localhost",
  "user": "root",
  "password": "prtk",
  "database" : "dev"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


module.exports = con;
