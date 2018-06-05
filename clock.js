
//clock that goes to 12:59:59 and then rolls over to 1:00:00 

//you can change the counter variable to test differnt times

var counter = 15000;

document.addEventListener('DOMContentLoaded',function(){

    var digitalClock = document.getElementsByTagName('h1')[0];
    
    var interval = setInterval(function(){
        var hourCount = ((counter - (counter % 3600))/3600);
        hourCount < 12 ? hourCount = hourCount : hourCount = hourCount % 12;

		console.log(hourCount);

		var totalSecondsLeft = (counter % 3600);
		var minuteCount  = ((totalSecondsLeft - (totalSecondsLeft % 60))/60);

		console.log(minuteCount);


		var secondCount = (totalSecondsLeft % 60);

			console.log(secondCount);
		counter++;

		digitalClock.innerText = hourCount + ' : ' + minuteCount + ' : ' + secondCount;
        
		},1000)
    }
 );
