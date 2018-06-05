var secondSelector = document.querySelector('#second');
var minuteSelector = document.querySelector('#minute');
var hourSelector = document.querySelector('#hour');
var second = 59;
var minute = 59;
var hour = 23;

var clockBegin;
//set all to zero and start counting
//once second hits 60, minute should +1, once minute hit 60 +1 hour, once hour hits 24 or clock display 24:00:00, reset all to zero
function startClock(){
  clockBegin = setInterval(function(){
  //where to output
      secondSelector.innerText = checkTime(second);
      minuteSelector.innerText = checkTime(minute);
      hourSelector.innerText = checkTime(hour);
  //starts the clock
      second++;
  //basic clock function
      if (second == 60) {
        second = 0;
        minute++;
      }

      if (minute == 60){
        minute = 0;
        hour++
      }

      if (hour == 24){
        second = 0;
        minute = 0;
        hour = 0;
      }
  },1000)
}
startClock();

var btn = document.querySelector('#smash').addEventListener("click", stopClock);
var btn2 = document.querySelector('#start').addEventListener("click", startClock);

function stopClock(){
  clearInterval(clockBegin);
};

//show 0 infront if less than 10
function checkTime(i) {
    if (i < 10) {
      i = "0" + i
    };
    return i;
}

// var btn = document.querySelector('#smash');
// btn.addEventListener("click", clearInterval(counting));
