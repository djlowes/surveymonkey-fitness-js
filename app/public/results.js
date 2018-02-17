$(document).ready(function() {


  var xhr = new XMLHttpRequest();
  var url = window.location.origin + "/api/responses"
  xhr.open('GET', url);
  xhr.onload = function() {
      if (xhr.status === 200) {
          console.log(JSON.stringify(xhr.responseText.data.pages));
      }
      else {
          console.log('Request failed.  Returned status of ' + xhr.status);
      }
  };
  xhr.send();

  // $.ajax({
  //       type:"POST",
  //       url: window.location.origin + "/api/responses",
  //       accepts: "application/json",
  //       dataType:"json",
  //       data:{
  //              "query" : "start n  = node(*) return n",
  //              "params" : {}
  //            },
  //       success: function(data, textStatus, jqXHR) {
  //           console.log(textStatus);
  //           },
  //       error:function(jqXHR, textStatus, errorThrown){
  //           console.log(textStatus);
  //           }
  //       });
})


// $("#submit").on("click", function() {
//
//       function validateForm() {
//         var isValid = true;
//         $('.form-control').each(function() {
//           if ($(this).val() === '')
//             isValid = false;
//         });
//
//         $('.chosen-select').each(function() {
//           if ($(this).val() === "")
//             isValid = false
//         })
//         return isValid;
//       }
//       // The scores key is set in a roundabout way because req.body was returning 'scores[]' and I wasn't able to iterate inside my POST because of this.
//       var scoreList = [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()];
//       if (validateForm() == true) {
//         var userData = {
//           name: $("#name").val(),
//           photo: $("#photo").val(),
//           scores: function () {
//             return (scoreList)
//           }
//         }
//         var currentURL = window.location.origin;
//         $.post(currentURL + "/api", userData, function(data) {
//           $("#matchName").text(data.name);
//           $('#matchImg').attr("src", data.photo);
//           $("#resultsModal").modal('toggle');
//
//         });
//       } else {
//         alert("Please fill out all fields before submitting!");
//       }
//       return false;
//     });
