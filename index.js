// Your code here
$(document).ready(function() {

var displaySecs = function() {
  var time = new Date();
  var ampm = time.getHours() >= 12 ? 'PM' : 'AM';
  var zero = time.getSeconds() < 10 ? '0' : '';

  timeString = '<h1>' + time.getHours() + ":" + time.getMinutes() +  ":" + zero + time.getSeconds() + ampm + '</h1>';

  $("#clock").html(timeString);
};

var t = setInterval(displaySecs, 1000);

});
