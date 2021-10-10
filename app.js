let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;

let stat = "stopped";

function stopwatch(){
    seconds++;

    if(seconds/60 === 1){
        seconds = 0;
        minutes++;

        if(minutes/60 == 1){
            minutes = 0;
            hours++;
        }

    }

    if(seconds < 10){
        displaySeconds = "0" + seconds;
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes;
    }
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours;
    }
    else{
        displayHours = hours;
    }
    
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;


}

function startStop(){
    if(stat === "stopped"){
        interval = window.setInterval(stopwatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        stat = "started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        stat = "stopped"
    }
}

function reset(){
    window.clearInterval(interval);

    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
}