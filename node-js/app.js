var settings = require('./config/settings.js');
var  db = require('./config/dbConnection.js');

var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
var port    = 8081;

var globSync = require('glob').sync;

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var allRoutes = globSync('./routes/**/*.js', {

    cwd: __dirname

}).map(require);

allRoutes.forEach(function(routes) {

    app.use(settings.contextRoot,routes);

});

var server = app.listen(8081, "127.0.0.1", function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App is up and running on port : ",  port);
 
});

