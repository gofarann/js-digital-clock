// Your code here
$(document).ready(function() {
// hours
// var displayHours = function() {
//   var time = new Date();
//   timeString = '<h1>' + time.getHours() + '</h1>';
//   nothing = "";
//   $("#hours").append(timeString);
// };
//
// var removeHours = function() {
//   $("#hours").children('h1').remove();
// };
//
//
// var t = setInterval(displayHours, 1000);
// var x = setInterval(removeHours, 999);
//
// // minutes
//
// var displayMinutes = function() {
//   var time = new Date();
//   timeString = '<h1>' + time.getMinutes() + '</h1>';
//   nothing = "";
//   $("#minutes").append(timeString);
// };
//
// var removeMinutes = function() {
//   $("#minutes").children('h1').remove();
// };
//
//
// var t = setInterval(displayMinutes, 1000);
// var x = setInterval(removeMinutes, 999);

// seconds
var displaySecs = function() {
  var time = new Date();
  var ampm = time.getHours() >= 12 ? 'PM' : 'AM';
  var zero = time.getSeconds() < 10 ? '0' : '';

  timeString = '<h1>' + time.getHours() + ":" + time.getMinutes() +  ":" + zero + time.getSeconds() + ampm + '</h1>';

  $("#clock").html(timeString);
};
//
// var removeSecs = function() {
//   $("#seconds").children('h1').remove();
// };


var t = setInterval(displaySecs, 1000);
// var x = setInterval(removeSecs, 999);



});
