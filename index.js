// // Your code here
// $(document).ready(function() {
//
// var displaySecs = function() {
//   var time = new Date();
//   var ampm = time.getHours() >= 12 ? 'PM' : 'AM';
//   var secondZero = time.getSeconds() < 10 ? '0' : '';
//   var minuteZero = time.getMinutes() < 10 ? '0' : '';
//
//
//   timeString = '<h1>' + time.getHours() + ":" + minuteZero + time.getMinutes() +  ":" + secondZero + time.getSeconds() + ampm + '</h1>';
//
//   $("#clock").html(timeString);
// };
//
// var t = setInterval(displaySecs, 1000);
//
//
//
// });

var timeString = function(location, offset) {
  var time = new Date();
  var ampm = time.getHours() >= 12 ? 'PM' : 'AM';
  var secondZero = time.getSeconds() < 10 ? '0' : '';
  var minuteZero = time.getMinutes() < 10 ? '0' : '';
  timeString = '<h1>'+ location + " " + time.getHours() + ":" + minuteZero + time.getMinutes() +  ":" + secondZero + time.getSeconds() + ampm + '</h1>';
  return timeString;
};

var displayTime = function(location, offset, callback) {
  location = callback(location, offset);
  $("#clock").html(location);
};

// Your code here
$(document).ready(function() {
  displayTime("Seattle", 0, timeString);
  window.setInterval(displayTime("Seattle", 0, timeString), 1000);
});
