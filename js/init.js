
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

var hr = 0;
var min = 0;
var sec = 0;

hours.innerHTML = '00';
minutes.innerHTML = '00';
seconds.innerHTML = '00';

//to add zero at the start of the hour if it's a single digit + make it a string
function translateHr () {
	if (hr == 24) {
		hr = 0;
	}

	if(hr > 9){
		hours.innerHTML = hr.toString();
	} else {
		hours.innerHTML = '0' + hr.toString();
	}
}


//to add zero at the start of the minute if it's a single digit + make it a string
function translateMin () {
	if (min == 60) {
		min = 0;
		hr +=1;
		translateHr();
	} 

	if(min > 9){
		minutes.innerHTML = min.toString();
	} else {
		minutes.innerHTML = '0' + min.toString();
	}
}

//to add zero at the start of the second if it's a single digit + make it a string
function translateSec () {
	if (sec == 60) {
		sec = 0;
		min +=1;
		translateMin();
	} 

	if (sec > 9){
		seconds.innerHTML = sec.toString();
	} else {
		seconds.innerHTML = '0' + sec.toString();
	}
}


setInterval ( function () {
	sec ++;
	translateSec();
}, 1000);