/* Function to get current time for the weather app*/ 
function time() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.querySelector('.hrs').innerHTML = hours;
    document.querySelector('.min').innerHTML = ": " + minutes;
    document.querySelector('.sec').innerHTML = ": " + seconds;
}

setInterval(time, 1000);