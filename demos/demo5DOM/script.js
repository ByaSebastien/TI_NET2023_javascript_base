// function afficherProprietes(obj) {
//     for (let prop in obj) {
//         let valeur = obj[prop];
//         document.getElementById("info").innerHTML +=
//             "<br>" + prop + ":" + valeur;
//     }
// }
// afficherProprietes(window);

// document.write("<h2>Coucou les loulous</h2>");

const myTitle = document.getElementById('title');
myTitle.innerText = "Hello World!!!";
myTitle.style = "color : red";
console.log(myTitle.attributes);

const myLis = document.getElementsByClassName('elem');

for (let myLi of myLis) {
    myLi.innerHTML = "Toto";
}

const lis = document.getElementsByTagName('li');

for (let li of lis) {
    li.innerText = "Starfield";
    li.setAttribute('style', 'color:chartreuse');
}

// <h2></h2>
const subtitle = document.createElement('h2');


// <h2>Nikita!!!</h2>
subtitle.innerText = "Nikita!!!";

document.body.appendChild(subtitle);

const newLi = document.createElement('li');
newLi.innerText = "4";

const li3 = document.getElementById('elem3');

const myList = document.getElementById('myList');

myList.insertBefore(newLi, myList.children[2]);

// myList.innerHTML += "<li>Coucou</li>"; a ne pas faire