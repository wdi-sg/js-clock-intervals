var secondSelector = document.querySelector('#second');
var minuteSelector = document.querySelector('#minute');
var hourSelector = document.querySelector('#hour');
var msSelector = document.querySelector('#ms')

//get date

var date = new Date();

var ms = date.getMilliseconds();
var second = date.getSeconds();
var minute = date.getMinutes();
var hour = date.getHours();

var clockBegin = setInterval("startClock()",1);
//set all to zero and start counting
//once second hits 60, minute should +1, once minute hit 60 +1 hour, once hour hits 24 or clock display 24:00:00, reset all to zero
function startClock(){
  //where to output
  //was slow
      secondSelector.innerText = checkTime(second);
      minuteSelector.innerText = checkTime(minute);
      hourSelector.innerText = checkTime(hour);
      msSelector.innerText = ms;
  //starts the clock
      ms++;
  if (ms >= 1000) {
    ms = 0;
    second++;
  }
  //basic clock function
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60){
    minute = 0;
    hour++;
  }
  if (hour == 24){
    second = 0;
    minute = 0;
    hour = 0;
  }
}
var clockBegin = function(){
  setInterval("startClock()",1);
}
// document.addEventListener("DOMContentLoaded", clockBegin);

// var btn = document.querySelector('#smash').addEventListener("click", stopClock);
// var btn2 = document.querySelector('#start').addEventListener("click", startClock);
//weird it stopped working

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
