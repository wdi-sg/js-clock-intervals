//HOW TO INCULDE MILLISECONDS
//HOW TO RESET TIMER


var hours=0,
	mintues=0,
	seconds=0,
	time;

function add() {
	seconds++;
	if(seconds>=60){
		seconds=0;
		if(mintues>=60){
			mintues=0;
			hours++
		}
	}
	var h=checkTime(hours);
	var m=checkTime(mintues);
	var s=checkTime(seconds);
	document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
	timer();
	zero();
}

function checkTime(i) {
    if (i < 10) {
    	i = "0" + i
    };  // add zero in front of numbers < 10
    return i;
}
function timer() {
    time = setTimeout(add, 1000);
}

function reset(){
	clearTimeout(time);
}

function zero(){
	if(document.getElementById('txt')== 23 + ":" + 59 + ":" + 59){ //NOT SURE HOW TO RESET
		reset();
		timer();
	}
}

timer();

//Rotating the image hand clock
 // Create an object with each hand and it's angle in degrees
var hands = [
   	{
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2)
    },
    {
      hand: 'minutes',
      angle: (minutes * 6)
    },
    {
      hand: 'seconds',
      angle: (seconds * 6)
    }
  ];
  // Loop through each of these hands to set their angle
  for (var j = 0; j < hands.length; j++) {
    var elements = document.querySelectorAll('.' + hands[j].hand);
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
        elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
        // If this is a minute hand, note the seconds position (to calculate minute position later)
        if (hands[j].hand === 'minutes') {
          elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
        }
    }
}

	if (hands[j].hand === 'minutes') {
  		elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
	}
/*
 * Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that
 */
function setUpMinuteHands() {
  // Find out how far into the minute we are
  var containers = document.querySelectorAll('.minutes');
  var secondAngle = containers[0].getAttribute("data-second-angle");
  if (secondAngle > 0) {
    // Set a timeout until the end of the current minute, to move the hand
    var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
    setTimeout(function() {
      moveMinuteHands(containers);
    }, delay);
  }
}

/*
 * Do the first minute's rotation
 */
function moveMinuteHands(containers) {
  for (var i = 0; i < containers.length; i++) {
    containers[i].style.webkitTransform = 'rotateZ(6deg)';
    containers[i].style.transform = 'rotateZ(6deg)';
  }
  // Then continue with a 60 second interval
  setInterval(function() {
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 12;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
      containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
    }
  }, 60000);
}



//Interesting way of using if else statment
//h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

// //UNABLE TO RUN AND PRINT MILLISECONDS
// var hours=0,
// 	mintues=0,
// 	seconds=0,
// 	mSeconds=0,
// 	time;

// function add() {
// 	mSeconds++;
// 	if(mSeconds>=99){
// 		seconds++;
// 		if(seconds>=600){
// 			seconds=0;
// 			if(mintues>=600){
// 				mintues=0;
// 				hours++
// 			}
// 		}
// 	}
// 	var h=checkTime(hours);
// 	var m=checkTime(mintues);
// 	var s=checkTime(seconds);
// 	var ms=checkTime(mSeconds);
// 	document.getElementById('txt').innerHTML = h + ":" + m + ":" + s + ':'+ ms;
// 	timer();
// }

// function checkTime(i) {
//     if (i < 1000) {
//     	i = "0" + i
//     };  // add zero in front of numbers < 10
//     return i;
// }
// function timer() {
//     time = setTimeout(add, 100);
// }
// timer();

// function reset(){
// 	clearTimeout(time)
// }