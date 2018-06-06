function mytime()
   {
   var d=new Date(); //to pull current date and time
   ampm="am";
   hour=d.getHours(); //to pull only hours
   min=d.getMinutes(); //to pull only minutes
   sec=d.getSeconds(); //to pull  only seconds
   if (hour>11) { //for switching between am and pm if time greater than 11
   	ampm = "pm"; 
   	}
   if (hour>12) { //to reset the time when switch from am to pm
    hour =- 12;
    }
   if (hour==0) { //to account for 12am showing instead of 0
	hour = 12; 
	}
   if (min<10) { //adding 0 to the start of the clock at minutes
    min = "0" + min; 
	}
   if (sec<10) { //adding 0 to the start of the clock at seconds
    sec = "0" + sec; 
	}
   document.getElementById('timehere').innerHTML=hour + ":" + min + ":" + sec + " " + ampm; //to link to html class id 'timehere' in the following format
   t=setTimeout('mytime()',500); //trigger function every 500 milliseconds
   }

// var date = new Date();
// var hours = date.getHours();
// var mins = date.getMins();
// var seconds = date.getSecs();

// console.log(hours+':'+mins+':'+seconds)

// function ensuredoubledigit(i) {
//     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
//}
// h = (h < 10) ? "0" + h : h;
// m = (m < 10) ? "0" + m : m;
// s = (s < 10) ? "0" + s : s;

// window.onload=function start() {
//    setInterval(timeout(),1000);
// }

// var session = "AM"; //for setting AM/PM
    
//   if(h == 0){
//   h = 12;
//   }
    
//   if(h > 12){
//   h =- 12;
//   session = "PM";
//   }

// function timeout() {
//    sec++;
//    if(sec==60){
//        sec=0;
//        min++;
//    }
//    if(min==60){
//        min=0;
//        hr++
//    }
//    ensuredoubledigit()
// }

// var hr = 0;
// var min = 0;
// var sec = 0;

// var hours = document.getElementById('hr');
// var mins = document.getElementById('min');
// var secs = document.getElementById('sec');

// console.log(hours);

// setInterval(timeout(),1000);

// hours.innerText = hr;
// mins.innerText = min;
// secs.innerText = sec;