let secondes = prompt("Secondes : ");

let jours = Math.floor(secondes / 86400);
let heures = Math.floor((secondes % 86400) / 3600);
let minutes = Math.floor((secondes % 3600) / 60);
secondes = secondes % 60;

alert(`${jours} jour(s) ${heures} heure(s) ${minutes} minute(s) ${secondes} seconde(s)`);
