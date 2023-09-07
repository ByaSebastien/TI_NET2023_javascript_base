let firstname = prompt("Votre nom : ");
let date = new Date().toLocaleString("fr-fr", { day: "2-digit", month: "long", year: "numeric" });

alert(`Bonjour ${firstname} nous sommes le ${date}`);