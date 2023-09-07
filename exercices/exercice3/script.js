let jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

let jour = jours[new Date().getDay()];

alert(`Bonjour nous sommes ${jour}`);

// let message = "Bonjour nous sommes " + new Date().toLocaleDateString('fr-fr', { weekday: "long" });

// const myH2 = document.createElement("h2");
// myH2.innerText = message;
// document.body.appendChild(myH2);