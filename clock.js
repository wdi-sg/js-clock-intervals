// create a timer that only goes up to 30 seconds

var counter = 0; // set the timer counter to zero

var interval = null; // create a variable to put the interval into

//set the interval
interval = setInterval( function(){

    counter++; // increment the counter
    
    console.log( "counter: "+counter); // output the current counter "time"
    
    // if 30 seconds have passed, stop the counter
    if( counter === 30 ){
      clearInterval( counter );
    }
    
}, 1000);
