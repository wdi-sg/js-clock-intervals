var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');

//number of degress to add for the different hands every second
var hrAddDeg = 0.00833333333;
var minAddDeg = 0.1;
var secAddDeg = 6;

//the current degrees of the different hands
var hrDeg = 278;
var minDeg = 40;
var secDeg = 34;

var hrNow;
var minNow;
var secNow;

function turn () {
	var d = new Date();
	hrNow = d.getHours();
	minNow = d.getMinutes();
	secNow = d.getSeconds();

	hrDeg = (30*hrNow) + (0.5*minNow) + (0.00833333333*secNow);
	minDeg = (6*minNow) + (0.1*secNow);
	secDeg = (6*secNow);

	hour.style.transform = "rotate(" + hrDeg + "deg)";
	minute.style.transform = "rotate(" + minDeg + "deg)";
	second.style.transform = "rotate(" + secDeg + "deg)";
}

setInterval(turn, 1000);