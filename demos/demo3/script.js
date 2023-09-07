let estHeureux = true;

if (estHeureux) {
    console.log("tappe dans tes mains");
} else {
    console.log("leve toi bat toi");
}

console.log((estHeureux ? 'tappe dans tes mains' : '...'));

let jour = "lundi";

switch (jour) {
    case "lundi":
        console.log("des patates");
        break;
    case "mardi":
        console.log("des patates");
        break;
    default:
        console.log("des patate aussi");
        break;
}

let cpt = 0;

while (cpt < 10) {
    console.log(cpt);
    cpt++;
}

let jours = ["lundi", "mardi", "mercredi"]

for (let i = 0; i < jours.length; i++) {
    console.log(jours[i]);
}

for (let i in jours) {
    console.log(jours[i]);
}

for (let jour of jours) {
    console.log(jour);
}

