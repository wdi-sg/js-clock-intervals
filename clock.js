$(document).ready(function() {

  // functions that i use
  // ============================================================
  function evaluateHandDegree(time) {
    time = parseInt(time);

    var degree = 360/60 * time;
    return "rotate(" + degree + "deg)";
  };

  function evaluateHourDegree(time) {
    time = parseInt(time);

    var degree = 360/12 * time;
    return "rotate(" + degree + "deg)";
  }

  function addZeroInFront(number) {
    if(number >= 0 && number < 10) {
      number = ("0" + number).slice(-2);
    };

    return number;
  };

  function addZeroToMSeconds(number) {
    if(number >= 0 && number < 10) {
      number = ("00" + number).slice(-3);
    } else if(number >= 10 && number < 100) {
      number = ("0" + number).slice(-3);
    };

    return number;
  };

  function convertToLondonTime(hour) {
    if(hour <= 8) {
      hour = (hour + 16);
    } else {
      hour -= 8;
    };

    return hour;
  };

  // initialising variables and setting starting time
  // ============================================================

  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  var mSecond = now.getMilliseconds();

  if (hour > 12) {
    var hour12 = hour - 12;
  } else {
    var hour12 = hour;
  };

  // apply the add zero method to seconds, minute and hour
  hour = addZeroInFront(hour);
  minute = addZeroInFront(minute);
  second = addZeroInFront(second);
  mSecond = addZeroToMSeconds(mSecond);

  $("#second").css("transform", evaluateHandDegree(second));
  $("#minute").css("transform", evaluateHandDegree(minute));
  $("#hour").css("transform", evaluateHourDegree(hour12));

  $("#dc-hours").text(hour);
  $("#dc-minutes").text(minute);
  $("#dc-seconds").text(second);
  $("#dc-mseconds").text(mSecond);

  $("#london-dc-hours").text(convertToLondonTime(hour));
  $("#london-dc-minutes").text(minute);
  $("#london-dc-seconds").text(second);

  // starting the clock
  // ============================================================

  var clockCounting = setInterval(function() {
    mSecond = parseInt(mSecond)
    second = parseInt(second);
    minute = parseInt(minute);
    hour = parseInt(hour);

    mSecond += 4;

    if (mSecond >= 1000) {
      // console.log("This is getting called");
      mSecond = 0;
      second += 1;

      if (second == 60) {
        second = 0;
        minute += 1;

        if (minute == 60) {
          minute = 0;
          hour12 += 1;
          hour += 1;

          if (hour12 > 12) {
            hour12 -= 12;
          };

          if (hour == 24) {
            hour -= 24;
          }
        };
      };
    };

    hour = addZeroInFront(hour);
    minute = addZeroInFront(minute);
    second = addZeroInFront(second);
    mSecond = addZeroToMSeconds(mSecond);

    $("#second").css("transform", evaluateHandDegree(second));
    $("#minute").css("transform", evaluateHandDegree(minute));
    $("#hour").css("transform", evaluateHourDegree(hour12));

    $("#dc-hours").text(hour);
    $("#dc-minutes").text(minute);
    $("#dc-seconds").text(second);
    $("#dc-mseconds").text(mSecond);

    $("#london-dc-hours").text(convertToLondonTime(hour));
    $("#london-dc-minutes").text(minute);
    $("#london-dc-seconds").text(second);

  }, 4);
});
