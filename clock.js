$(function() {

      var currentTime = new Date();
      
      var currentHour = currentTime.getHours();
      var currentMinute = currentTime.getMinutes();
      var currentSecond = currentTime.getSeconds();

      function currentTimeCreation() {
            currentTime = new Date();
            currentHour = currentTime.getHours();
            currentMinute = currentTime.getMinutes();
            currentSecond = currentTime.getSeconds();
      };

      function secondHand(rawValue) {
            let degree = (rawValue / 60) * 360
            $("#second").css("transform", "rotate(" + degree + "deg)");
      };

      function minuteHand(rawValue) {
            let degree = (rawValue / 60) * 360
            $("#minute").css("transform", "rotate(" + degree + "deg)");
      };

      function hourHand(rawValue) {
            let degree = (rawValue / 12) * 360 + (currentMinute / 60 * 30)
            $("#hour").css("transform", "rotate(" + degree + "deg)");
      };

      function displayCurrentTime() {
            secondHand(currentSecond);
            minuteHand(currentMinute);
            hourHand(currentHour);
      };

      displayCurrentTime();
      setInterval(function() {currentTimeCreation(); displayCurrentTime()}, 1000);
      
});