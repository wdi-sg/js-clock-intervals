var hours=0,
	mintues=0,
	seconds=0,
	time;

function add() {
	seconds++;
	if(seconds>=60){
		seconds=0;
		mintues++;
		if(mintues>=60){
			mintues=0;
			hours++;
		}
	}
	var h=checkTime(hours);
	var m=checkTime(mintues);
	var s=checkTime(seconds);
	document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
	timer();
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
	if(document.getElementById('txt')=='23:59:59'){
		reset();
		timer();
	}
}

timer();

// do{
// 	reset();
// 	timer();
// }
// while(document.getElementById('txt')=='23:59:59'); //AM I ABLE TO DO THIS 


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