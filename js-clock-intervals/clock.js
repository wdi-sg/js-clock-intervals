// create a timer that only goes up to 30 seconds

var counter = 55; // set the timer counter to zero
var hour = 12, min = 59, seconds = 55
var interval = null; // create a variable to put the interval into
var dispTime = document.getElementById("digital");
//set the interval

interval = setInterval( function(){

    dispTime.innerText = counter;
    counter+=1; // increment the counter
    seconds+=1
    if( seconds == 60 ){
        console.log("in clear counter")
        // clearInterval( interval );
        counter=0;
        seconds = 0;
        min+=1;
        if (min == 60 && hour == 12){
            hour = 1;
            min = 0;
        }else if (min == 60){
            hour+=1;
            min=0;
        }
    }
    console.log( "Time: "+hour+":"+min+":"+seconds);
    console.log("counter:"+counter) // output the current counter "time"

    // if 30 seconds have passed, stop the counter


}, 1000);

