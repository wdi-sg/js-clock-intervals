var timer = 0;
var d1hr, d2hr, d3hr, d1min, d3min, d1sec, d3sec, d1hrDisplay, d2hrDisplay, d1minDisplay, d1secDisplay, d1msecDisplay;
var d3hrDisplay, d3minDisplay, d3secDisplay, ampm, ampmValue, a1hr, a1min, a1sec, a2hr, a2min, a2sec, a3hr, a3min, a3sec;


// Calculate the minutes and hours

function calculateTime(timer, divisor, limit) {
	var result = Math.floor(timer / divisor);
	var limit2 = limit + 1
	if (result > limit) {
		result %= limit2;
	}
	return result;
}


// Format the number display for hr, min, and sec

function formatNumber(num) {
	var result;
	if (num < 10) {
		result = "0" + num;
	} else {
		result = "" + num;
	}
	return result;
}


// Format the number display for msec

function formatMSec(num) {
	var result;
	if (num < 10) {
		result = "00" + num;
	} else if (num >= 10 && num < 100) {
		result = "0" + num;
	} else {
		result = "" + num;
	}
	return result;
}


// Check if num is even. To show between AM or PM.

function isEven(num) {
	if (num % 2 === 0) {
		return "AM";
	} else {
		return "PM";
	}
}


// Rotate function

function hourRotation(val) {
	a1hr = document.getElementById("hour");
	var deg = val / 12 * 360;
	a1hr.style.transform = "rotate(" + deg + "deg)";
}

function minuteRotation(val) {
	a1min = document.getElementById("minute");
	var deg = val / 60 * 360;
	a1min.style.transform = "rotate(" + deg + "deg)";
}

function secondRotation(val) {
	a1sec = document.getElementById("second");
	var deg = val / 60 * 360;
	a1sec.style.transform = "rotate(" + deg + "deg)";
}


// Check, set and start analog time

function showHour(el, val) {
	el.style.transform = "rotate(" + val + "deg)";
}

function showMinSec(el, val) {
	el.style.transform = "rotate(" + val + "deg)";
}

function animateClock(hr, min, sec) {
	setInterval(function() {
		a2sec.style.transform = "rotate(" + sec +"deg)";
		sec++
	}, 167);
	setInterval(function() {
		a2min.style.transform = "rotate(" + min +"deg)";
		min++
	}, 10000);
	setInterval(function() {
		a2hr.style.transform = "rotate(" + hr +"deg)";
		hr++
	}, 120000);
}

function utcplus8(hr, min, sec) {
	showHour(a2hr, hr);
	showMinSec(a2min, min);
	showMinSec(a2sec, sec);
	animateClock(hr, min, sec);
}



// Set interval
window.onload = function() {
	a2hr = document.getElementById("hour2");
	a2min = document.getElementById("minute2");
	a2sec = document.getElementById("second2");
	var counter = setInterval(function() {
		var d1timeDisplay = document.getElementsByClassName("red")[0];
		var d2timeDisplay = document.getElementsByClassName("green")[0];
		timer += 4;
		d1sec = calculateTime(timer, 1000, 59);
		d1min = calculateTime(timer, 60000, 59);
		d1hr = calculateTime(timer, 3600000, 23);
		d2hr = Math.floor(d1hr % 12);
		if (d2hr === 0) {
			d2hr = 12;
		}
		ampmValue = Math.floor(d1hr / 12);
		ampm = isEven(ampmValue);
		d1msecDisplay = formatMSec(timer % 1000);
		d1secDisplay = formatNumber(d1sec);
		d1minDisplay = formatNumber(d1min);
		d1hrDisplay = formatNumber(d1hr);
		d2hrDisplay = formatNumber(d2hr);
		d1timeDisplay.innerText = d1hrDisplay + " : " + d1minDisplay + " : " + d1secDisplay + " : " + d1msecDisplay;
		d2timeDisplay.innerText = d2hrDisplay + " : " + d1minDisplay + " : " + d1secDisplay + "   " + ampm;
	}, 4);
	var countNow = setInterval(function() {
		var d3timeDisplay = document.getElementsByClassName("blue")[0];
		var now = new Date();
		d3hr = now.getHours();
		d3min = now.getMinutes();
		d3sec = now.getSeconds();
 		d3hrDisplay = formatNumber(d3hr);
 		d3minDisplay = formatNumber(d3min);
 		d3secDisplay = formatNumber(d3sec);
 		d3timeDisplay.innerText = d3hrDisplay + " : " + d3minDisplay + " : " + d3secDisplay;
	}, 1000);
	secondRotation(45);
	hourRotation(3)
	minuteRotation(30);
	var now = new Date();
	var hr = now.getHours() / 12 * 360;
	var min = now.getMinutes() / 60 * 360;
	var sec = now.getSeconds() / 60 * 360;
	// console.log(now);
	// console.log(now.getFullYear());
	// console.log(now.getMonth());
	// console.log(now.getDate());
	// console.log(now.getHours());
	// console.log(now.getMinutes());
	// console.log(now.getSeconds());
	// console.log(now.getMilliseconds());
	// console.log(now.getTime());
	// console.log(now.getDay());
	utcplus8(hr, min, sec);
}