const myDate = document.getElementById('myDate');
const myHour = document.getElementById('myHour');

setInterval(showDate, 1000);

function showDate() {
    let now = new Date();
    myDate.innerText = now.toLocaleDateString('fr-fr', { weekday: "long", day: "2-digit", month: "long" });
    myHour.innerText = now.toLocaleTimeString('fr-fr', { hour: "2-digit", minute: "2-digit", second: "2-digit" });
};