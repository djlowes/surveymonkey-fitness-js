//--------------------------------------
//Node Dependencies
//--------------------------------------
var express = require("express");
var bodyParser = require("body-parser");

//--------------------------------------
//Routing
//--------------------------------------
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

//--------------------------------------
//Set up App
//--------------------------------------
var app = express();
var PORT = process.env.PORT || 3000;

//--------------------------------------
//Set up Express to handle data parsing
//--------------------------------------
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static(__dirname + '/app/public'));

//--------------------------------------
//Listener
//--------------------------------------
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
