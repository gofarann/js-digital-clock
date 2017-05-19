// Your code here
$(document).ready(function() {
// hours
var displayHours = function() {
  var time = new Date();
  timeString = '<h1>' + time.getMinutes() + '</h1>';
  nothing = "";
  $("#hours").append(timeString);
};

var removeHours = function() {
  var time = new Date();
  timeString = '<h1>' + time.getMinutes() + '</h1>';
  nothing = "";
  $("#hours").children('h1').remove();
};


var t = setInterval(displayHours, 1000);
var x = setInterval(removeHours, 999);

// minutes

// seconds
  var displaySecs = function() {
    var time = new Date();
    timeString = '<h1>' + time.getSeconds() + '</h1>';
    nothing = "";
    $("#seconds").append(timeString);
  };

  var removeSecs = function() {
    var time = new Date();
    timeString = '<h1>' + time.getSeconds() + '</h1>';
    nothing = "";
    $("#seconds").children('h1').remove();
  };


  var t = setInterval(displaySecs, 1000);
  var x = setInterval(removeSecs, 999);



});
