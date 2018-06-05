function setTime() {
    var canvas = document.getElementById("clock");
    var context = canvas.getContext("2d");
    var clockRadius = canvas.width/2;

    // begin drawing circle
    context.beginPath();
      context.fillStyle = "black";
      // set arc radius
      context.arc(clockRadius, clockRadius, clockRadius, 0, 2*Math.PI);
      context.fill();

      // draw middle circle
      // set fill to white before drawing
      context.fillStyle = "white";
      context.beginPath();
      context.arc(clockRadius, clockRadius, 10, 0, 2*Math.PI);
      context.fill();

      // set 10th of radius in terms of px
      context.font = clockRadius / 10 + "px arial";
      // set text align centre in horizontally
      context.textAlign = "center";
      // set text align centre in vertically
      context.textBaseline = "middle";

      // set 1 to 12
      for (var i = 1; i <= 12; i++) {
          context.fillText(i, clockRadius + clockRadius * 0.9 * Math.sin(i * 2*Math.PI / 12), clockRadius - (clockRadius * 0.9 * Math.cos(i * 2 * Math.PI / 12)));
      }

      // set time
      var hours = new Date().getHours();
      var minutes = new Date().getMinutes();
      var seconds = new Date().getSeconds();

      // hours%12: sets 24 hr to 12 hr time (get remainder if more than 12)
      // minutes/60: to get minutes in an hour
      // seconds/3600: to get seconds in an hour
      var fullHours = hours % 12 + minutes / 60 + seconds / 3600;
      // angle for 1 hour is 2PI (one circle) divided by 12th way of circle
      var hoursAngle = fullHours * 2 * Math.PI / 12;
      var minutesAngle = minutes * 2 * Math.PI / 60;
      var secondsAngle = seconds * 2 * Math.PI / 60;

      // set hour-hand
      context.strokeStyle = "white";
      // from centre of clock
      context.moveTo(clockRadius, clockRadius);
      // to about 0.6 length of radius
      context.lineTo(clockRadius + clockRadius * 0.6 * Math.sin(hoursAngle), clockRadius - (clockRadius * 0.6 * Math.cos(hoursAngle)));
      context.lineWidth = 5;
      context.stroke();

      // set minute-hand
      context.moveTo(clockRadius, clockRadius);
      // to about 0.8 length of radius
      context.lineTo(clockRadius + clockRadius * 0.8 * Math.sin(minutesAngle), clockRadius - (clockRadius * 0.8 * Math.cos(minutesAngle)));
      context.lineWidth = 3;
      context.stroke();

      // set seconds-hand
      context.moveTo(clockRadius, clockRadius);
      context.lineTo(clockRadius + clockRadius * 0.9 * Math.sin(secondsAngle), clockRadius - (clockRadius * 0.9 * Math.cos(secondsAngle)));
      context.lineWidth = 2;
      context.stroke();
}

// set the time every 1000 milliseconds
setInterval(setTime, 1000);


// Digital Clock
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var hour = convertHour(h);
    h = checkTime(hour[0]);
    document.getElementById('digitalClock').textContent = h + ":" + m + ":" + s + " " + hour[1];
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    // add zero in front of numbers < 10
    return i;
}

function convertHour(hour) {
  var ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  hour = hour ? hour : 12;
  return [hour, ampm]
}

startTime();