var settings = require('./settings.js');
var  db = require('./dbConnection.js');

var express = require('express');
var app     = express();
var bodyParser = require('body-parser');
const port = process.env.PORT || 8081;

var globSync = require('glob').sync;

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


var allRoutes = globSync('./routes/**/*.js', {

    cwd: __dirname

}).map(require);

allRoutes.forEach(function(routes) {

    app.use(settings.contextRoot,routes);

});

/*app.listen(port);
console.log('App listening on port : ' + port);*/

/*app.get('/sample', function(req, res) {
    res.send('this is a sample!');  
});*/


app.listen(port,function(err,res){
    if(!err){
        console.log(`App is up and running on port ${port}`);
    }
});
