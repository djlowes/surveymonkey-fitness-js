//--------------------------------------
// Dependencies
//--------------------------------------

// Library ** https://github.com/Datahero/node-surveymonkey **
const SurveyMonkeyAPI = require('surveymonkey').SurveyMonkeyAPI;
// Library ** https://github.com/Piotrovskyi/survey-monkey-api **
const SurveyMonkeyAPII = require('survey-monkey');

var express = require("express");
var router = express.Router();
var token = require('../../auth');
var request = require("request");

//--------------------------------------
// API Calls
//--------------------------------------

router.get("/", function(req, res) {
  // return res.json(players);
  try {
    var api = new SurveyMonkeyAPI(token.accessToken, {
      version: 'v3',
      secure: false
    });
  } catch (error) {
    console.log(error.message);
  }
  api.getSurveyList({}, function(error, data) {
    if (error)
      console.log(error.message);
    else
      return res.json(data)
    console.log(JSON.stringify(data)); // Do something with your data!
  });
});

router.get("/answers", function(req, res) {
  try {
    var api = new SurveyMonkeyAPI(token.accessToken, {
      version: 'v3',
      secure: false
    });
  } catch (error) {
    console.log(error.message);
  }
  api.getSurveyDetails({
    id: '130726645'
  }, function(error, data) {
    if (error)
      console.log(error);
    else
      res.json(data)
    console.log(JSON.stringify(data));
  });
});

router.get("/responses", function(req, res) {
  try {
    var api = new SurveyMonkeyAPII(token.accessToken);
  } catch (err) {
    console.log(err.message);
  }
  api.getSurvayResponsesBulk(130726645).then(function(surveys) {
    res.json(surveys);
    list = surveys.data
    for (let i = 0; i<list.length; i++) {
      var ans = list[i].pages;
      for (let j = 0; j<ans.length; j++) {
        var answ = ans[j].questions;
        for (let k = 0; k<answ.length; k++) {
          var answe = answ[k].answers;
          for (let l = 0; l<answe.length; l++) {
            console.log(answe[l])

          }
        }
      }
    }
  }).catch(err => console.error(err))
});



router.get("/test", function(req, res) {

  var options = {
    method: 'GET',
    url: 'https://api.surveymonkey.com/v3/surveys/130726645/details',
    headers:
    { 'Authorization': 'bearer ' + token.accessToken,
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json'
    }
 };

 request(options, function (error, response, body) {
  if (error) throw new Error(error);

  res.json(body);
  console.log(body);
  console.log(response);

  });
});

module.exports = router;
