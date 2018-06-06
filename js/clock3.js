var mode = 24;

var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var mornNight = document.getElementById('mornNight');

var hr = 13;
var min = 40;
var sec = 12;

hours.innerHTML = '00';
minutes.innerHTML = '00';
seconds.innerHTML = '00';





//24 HOUR MODE
	//initiate 24 hour mode
	var init24 = function () {
		if(mornNight.innerText == 'am') {
			mornNight.innerText = '';
			if(hr == 12){
				hr = 0;
			}
			translateHr24();
		} else if (mornNight.innerText == 'pm') {

			mornNight.innerText = '';
			if (hr != 12) {
				hr = hr + 12;
				translateHr24();
			} else {
				translateHr24();
			}

		}
	}

	//to add zero at the start of the hour if it's a single digit + make it a string
	function translateHr24 () {
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
	function translateMin24 () {
		if (min == 60) {
			min = 0;
			hr +=1;
			translateHr24();
		} 

		if(min > 9){
			minutes.innerHTML = min.toString();
		} else {
			minutes.innerHTML = '0' + min.toString();
		}
	}

	//to add zero at the start of the second if it's a single digit + make it a string
	function translateSec24 () {
		if (sec == 60) {
			sec = 0;
			min +=1;
			translateMin24();
		} 

		if (sec > 9){
			seconds.innerHTML = sec.toString();
		} else {
			seconds.innerHTML = '0' + sec.toString();
		}
	}







//12 HOUR MODE
	//initiate 12 hour mode
	var init12 = function () {
		if (hr >= 12 && hr < 24) {
			mornNight.innerText = 'pm';
			hr = hr - 12;
			translateHr12();
		} else if (hr <12) {
			mornNight.innerText = 'am';
			if(hr == 0) {
				hr = 12;
			}
			translateHr24();
		}
	}


	//to add zero at the start of the hour if it's a single digit + make it a string
	function translateHr12 () {
		if (hr == 12 && mornNight == 'am') {
			mornNight = 'pm';
		} else if (hr == 12 && mornNight == 'pm') {
			mornNight = 'am';
		} else if (hr == 13) {
			hr = 1;
		};

		if(hr > 9){
			hours.innerHTML = hr.toString();
		} else {
			hours.innerHTML = '0' + hr.toString();
		}
	}


	//to add zero at the start of the minute if it's a single digit + make it a string
	function translateMin12 () {
		if (min == 60) {
			min = 0;
			hr +=1;
			translateHr12();
		} 

		if(min > 9){
			minutes.innerHTML = min.toString();
		} else {
			minutes.innerHTML = '0' + min.toString();
		}
	}

	//to add zero at the start of the second if it's a single digit + make it a string
	function translateSec12 () {
		if (sec == 60) {
			sec = 0;
			min +=1;
			translateMin12();
		} 

		if (sec > 9){
			seconds.innerHTML = sec.toString();
		} else {
			seconds.innerHTML = '0' + sec.toString();
		}
	}


//check if it's 24 hours or 12 hours mode
var checkTranslateSec = function () {
	if(mode == 12) {
		translateSec12();
		translateMin12();
		translateHr12();
	} else if (mode == 24) {
		translateSec24();
		translateMin24();
		translateHr24();
	}
}

//the increase of the seconds
setInterval ( function () {
	sec ++;
	checkTranslateSec();
}, 1000);

//changes the mode to 12 or 24h
var check = function () {
	console.log('hi')
	if(mode == 24) {
		mode = 12;
		button[0].innerText = 'change to 24 h';
		init12();
	} else if (mode == 12) {
		mode = 24;
		button[0].innerText = 'change to 12 h';
		init24();
	}
}

var button = document.getElementsByTagName('button');
button[0].addEventListener('click', check);

