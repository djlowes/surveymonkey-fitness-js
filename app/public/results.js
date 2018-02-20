$(document).ready(function() {
  // Push into individual question arrays in preparation for slice & dice
  var qTwo = [];
  var qThree = [];
  var qFour = [];
  var object = {}

  // Call API
  var xhr = new XMLHttpRequest();
  var url = 'https://api.surveymonkey.com/v3/surveys/130879901/rollups';
  xhr.open('GET', url);
  xhr.setRequestHeader('Authorization', 'bearer skOm0AUVeqEG.cbTveAdLBZJctQ6LRTVDmr9DN84t5LJ38LaDJyqWY2mkr4T8gWSX.FMLEyDvfLRXO50Dx4Ec7pnFAS1erpDuC7fLw9XYj0bcOXekUt4hPkc.6hebnKJ');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
      if (xhr.status === 200) {
          console.log("Great success");
      }
      else {
          console.log('Request failed.  Returned status of ' + xhr.status);
      }
      object = JSON.parse(xhr.response);
      qTwo.push(object.data[1].summary[0].choices);
      qThree.push(object.data[2].summary[0].choices);
      qFour.push(object.data[3].summary[0].choices);
  };
  xhr.send();
 console.log(qTwo)
 console.log(qThree)
 console.log(qFour)
});
