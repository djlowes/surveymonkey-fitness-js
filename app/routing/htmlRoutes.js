//--------------------------------------
//Dependencies
//--------------------------------------
var express = require("express");
var router = express.Router();
var path = require('path');

//--------------------------------------
//Routing
//--------------------------------------
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'home.html'));
});

router.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'survey.html'));
});

router.get("/results", function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'results.html'));
});

module.exports = router;
