const chrono = document.getElementById('chrono');

let totalSeconds = 0;
let timer;

function start() {
    timer = setInterval(() => {
        totalSeconds += 1;
        showChrono();
    }, 1);
};

function stop() {
    clearInterval(timer);
}

function reset() {
    stop();
    totalSeconds = 0;
    showChrono();
}

function showChrono() {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    chrono.innerText = `${(hours < 10 ? '0' : '') + hours} : ${(minutes < 10 ? '0' : '') + minutes} : ${(seconds < 10 ? '0' : '') + seconds}`;
};