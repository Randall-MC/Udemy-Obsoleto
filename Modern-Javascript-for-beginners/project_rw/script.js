"strict";
/* 
    Count down timer
*/

startTimer(10, "timer");

function startTimer(seconds, element) {
    // Call this every single time the function is called - every second
    let t = document.getElementById(element);

    if (seconds.toString().length == 1) {
        t.innerHTML = `<h1>00:0${seconds}</h1>`;
    } else {
        t.innerHTML = `<h1>00:${seconds}</h1>`;
    }

    if (seconds < 1) {
        t.innerHTML = `<h1>00:00</h1>`;
        clearTimeout(countDown)
    }

    seconds--;
    let countDown = setTimeout(startTimer, 1000, seconds, element);
} 