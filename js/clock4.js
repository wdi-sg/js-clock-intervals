function everything () {

	var hours = document.getElementById('hours');
	var minutes = document.getElementById('minutes');
	var seconds = document.getElementById('seconds');

	

	var hr = 0;
	var min = 0;
	var sec = 0;

	//to add zero at the start of the hour if it's a single digit + make it a string
	function translateHr (hrs) {
		hr = hrs;

		if(hr > 9){
			hours.innerHTML = hr.toString();
		} else {
			hours.innerHTML = '0' + hr.toString();
		}
	}

	//to add zero at the start of the minute if it's a single digit + make it a string
	function translateMin (mins) {
		min = mins;

		if(min > 9){
			minutes.innerHTML = min.toString();
		} else {
			minutes.innerHTML = '0' + min.toString();
		}
	}

	//to add zero at the start of the second if it's a single digit + make it a string
	function translateSec (secs) {
		sec = secs;

		if (sec > 9){
			seconds.innerHTML = sec.toString();
		} else {
			seconds.innerHTML = '0' + sec.toString();
		}
	}



	function time () {
		var d = new Date();
		translateSec(d.getSeconds());
		translateMin(d.getMinutes());
		translateHr(d.getHours());
		console.log('hi')
		console.log(d.getSeconds());
	}


	setInterval(time, 1000);
}


document.addEventListener('DOMContentLoaded', everything);
