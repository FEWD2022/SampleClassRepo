// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...

// Reset function that turns all lights off
function turnOff(){
    const theBulbs = document.querySelectorAll(".bulb");
	
    for (let i = 0; i < theBulbs.length; i++) {
        theBulbs.style.backgroundColor="black";
	}
}


// Green
function go(){

    // Turn everything off
    turnOff();

    // Turn green on
    //document.querySelector("#goLight").classList.add("go");
    document.querySelector("#goLight").style.backgroundColor="green";
}
// Red
function stop(){
    // Turn everything off
    turnOff();

    // Turn red on
    //document.querySelector("#stopLight").classList.add("stop");
    document.querySelector("#stopLight").style.backgroundColor="red";

}


// Yellow
function caution(){
    // Turn everything off
    turnOff();
    // Turn yellow on
    //document.querySelector("#slowLight").classList.add("caution");
    document.querySelector("#slowLight").style.backgroundColor="yellow";
}



// Bind to red
document.getElementById('stopButton').addEventListener('click',stop);

// Bind to green
document.getElementById('goButton').addEventListener('click',go);

// Bind to yellow
document.getElementById('slowButton').addEventListener('click',caution);
