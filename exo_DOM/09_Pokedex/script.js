
const pokeList = document.getElementById('pokeList');
const pokedex = document.getElementById('pokedex');
let pokemons;
let currentPokemon;
const pokeImg = document.getElementById('pokeImg');
for (let i = 0; i < 20; i++) {
    let newLi = document.createElement('li');
    newLi.addEventListener('mouseover', getInfo);
    pokeList.appendChild(newLi);
}
showPokemons('https://pokeapi.co/api/v2/pokemon/');


function doGet(url) {
    return fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('error');
            }
        });
};

function showPokemons(url) {
    doGet(url)
        .then((response) => {
            pokemons = response;
            console.log(pokemons);
            fillPokeList();
        })
        .catch((error) => console.log(error));
}

function fillPokeList() {
    for (let i = 0; i < 20; i++) {
        console.log(pokemons.results[i].name);
        pokeList.children[i].innerText = pokemons.results[i].name;
    }
}

function previous() {
    if (pokemons.previous === null) {
        return;
    }
    showPokemons(pokemons.previous);
}

function next() {
    if (pokemons.next === null) {
        return;
    }
    showPokemons(pokemons.next);
}

function getInfo() {
    let i = Array.from(pokeList.children).indexOf(this);
    doGet(pokemons.results[i].url)
        .then((response) => {
            currentPokemon = response;
            console.log(currentPokemon);
            pokedex.children[0].setAttribute('src', currentPokemon.sprites.front_shiny);
            pokedex.children[1].innerHTML = `Nom : ${currentPokemon.name}`
            pokedex.children[2].innerHTML = `Poids : ${currentPokemon.weight}`
            pokedex.children[3].innerHTML = `Taille : ${currentPokemon.height}`
        })
}