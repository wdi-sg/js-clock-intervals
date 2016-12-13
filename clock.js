/*global $ */
var degreesPerSecond = 360 / 60
var degreesPerHour = 360 / 12
var minuteHandDegreesPerSecond = degreesPerSecond / 60
var hourHandDegreesPerMinute = degreesPerHour / 60

function updateTime () {
  var now = new Date()
  var seconds = now.getSeconds()
  var mins = now.getMinutes()
  var hours = now.getHours()
  var secondHand = degreesPerSecond * seconds
  var minuteHand = degreesPerSecond * mins
  var hourHand = degreesPerHour * hours

  $('#second').css('transform', 'rotate(' + secondHand + 'deg)')
  $('#minute').css('transform', 'rotate(' + minuteHand + 'deg)')
  $('#hour').css('transform', 'rotate(' + hourHand + 'deg)')
}
function updateTimeSmooth () {
  var now = new Date()
  var seconds = now.getSeconds()
  var mins = now.getMinutes()
  var hours = now.getHours()
  var degreesPerSecond = 360 / 60
  var degreesPerHour = 360 / 12
  var secondHand = degreesPerSecond * seconds
  var minuteHand = degreesPerSecond * mins
  var hourHand = degreesPerHour * hours

  minuteHand += minuteHandDegreesPerSecond * seconds
  hourHand += hourHandDegreesPerMinute * mins

  $('#second').css('transform', 'rotate(' + secondHand + 'deg)')
  $('#minute').css('transform', 'rotate(' + minuteHand + 'deg)')
  $('#hour').css('transform', 'rotate(' + hourHand + 'deg)')
}
$(function () {
  // update every second
  setInterval(function () {
    updateTimeSmooth()
  }, 1000)

  // update initially
  updateTimeSmooth()
})
