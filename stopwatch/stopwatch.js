let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let status ="stopped";
let interval = null;

function stopWatch() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds.toString();
    }
    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes.toString();
    }
    if (hours < 10) {
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours.toString();
    }
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

function startStop(){
    if(status ==="stopped"){
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("start-stop").innerHTML = "Stop";
        document.getElementById("start-stop").style.backgroundColor = "darkred";
        document.getElementById("start-stop").style.border = "darkred";
        status = "started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("start-stop").innerHTML = "Start";
        document.getElementById("start-stop").style.backgroundColor = "#66A182";
        document.getElementById("start-stop").style.border = "#66A182";
        status = "stopped";
    }
}

function reset(){
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML="00:00:00";
    document.getElementById("start-stop").innerHTML="Start";
    document.getElementById("start-stop").style.backgroundColor = "#66A182";
        document.getElementById("start-stop").style.border = "#66A182";
}

const btnStartStop = document.getElementById("start-stop");
btnStartStop.addEventListener("click", startStop);

const btnReset = document.getElementById("reset");
btnReset.addEventListener("click", reset);