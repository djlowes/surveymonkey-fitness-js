//--------------------------------------
// Node Dependencies
//--------------------------------------
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var logger = require("morgan"); // for debugging
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var session = require('express-session');
var expressValidator = require('express-validator');
var cookieParser = require('cookie-parser')

//--------------------------------------
// Set up App
//--------------------------------------
var app = express();
var PORT = process.env.PORT || 3000;

//--------------------------------------
// DB
//--------------------------------------
if (process.env.NODE_ENV == 'production') {
   mongoose.connect('');
   } else {
  mongoose.connect('mongodb://localhost/surveymonkey');
   }

var db = mongoose.connection;
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

//--------------------------------------
// Models
//--------------------------------------
var User = require('./models/User');

//--------------------------------------
// Routing
//--------------------------------------
var apiRoutes = require("./app/routing/apiRoutes");
app.use('/api', apiRoutes);
require('./app/routing/routes.js')(app, passport)

//--------------------------------------
// Middleware & Passport
//--------------------------------------
app.use(express.static(__dirname + '/app/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());



//--------------------------------------
// Configure Passport
//--------------------------------------
// app.use(require('express-session')({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


require('./app/routing/passport.js')(passport)

//--------------------------------------
// Listener
//--------------------------------------
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
