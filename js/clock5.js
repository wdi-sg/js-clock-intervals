var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');

//number of degress to add for the different hands every second
var hrAddDeg = 0.00833333333;
var minAddDeg = 0.1;
var secAddDeg = 6;

//the current degrees of the different hands
var hrNow = 278;
var minNow = 40;
var secNow = 34;

function turn () {
	hrNow += hrAddDeg;
	minNow += minAddDeg;
	secNow += secAddDeg;

	hour.style.transform = "rotate(" + hrNow + "deg)";
	minute.style.transform = "rotate(" + minNow + "deg)";
	second.style.transform = "rotate(" + secNow + "deg)";
}

setInterval(turn, 1000);


// problems with this series of code:
// - the button will get covered by the images of the hands that are rotating\
// - the images will move down and away from the clock when inspecting (opening the console)
// ---> to circumvent the second problem with the images, group the different hands and the clock face
// into a div with position absolute. and make that div position relative to the page
