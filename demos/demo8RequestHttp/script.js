let pokemons;
let pokemonInfo;

//#region xhr pure
// let xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/');

// xhr.onload = () => {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             pokemons = JSON.parse(xhr.responseText);
//             console.log(pokemons);
//             console.log(typeof (pokemons));
//             for (let p of pokemons.results) {
//                 console.log(p.name);
//                 console.log(p.url);
//             }
//         }
//     }
// };

// xhr.onerror = () => {
//     console.log('Erreur');
// };

// xhr.send();
//#endregion

//#region xhr callback
// function faireUneRequeteHttp(url, onSuccess, onError) {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', url);

//     xhr.onload = () => {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 onSuccess(xhr.responseText);
//             }
//         }
//     };

//     xhr.onerror = () => {
//         onError('Erreur')
//     };

//     xhr.send();
// }

// faireUneRequeteHttp('https://pokeapi.co/api/v2/pokemon/',
//     (response) => {
//         pokemons = JSON.parse(response);
//         console.log(pokemons);
//     },
//     (error) => {
//         console.log(error);
//     });

// faireUneRequeteHttp('https://pokeapi.co/api/v2/pokemon/1',
//     (response) => {
//         pokemonInfo = JSON.parse(response);
//         console.log(pokemonInfo);
//     },
//     (error) => {
//         console.log(error);
//     });
//#endregion

//#region xhr promise

// function faireUneRequeteHttp(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();

//         xhr.open('GET', url);

//         xhr.onload = () => {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     resolve(xhr.responseText);
//                 }
//             } else {
//                 reject(`Erreur ${xhr.status} : ${xhr.statusText}`)
//             }
//         }

//         xhr.onerror = () => {
//             reject('Error');
//         }

//         xhr.send();
//     });
// }

// faireUneRequeteHttp('https://pokeapi.co/api/v2/pokemon/')
//     .then((response) => {
//         pokemons = JSON.parse(response);
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//#endregion

//#region fetch

// fetch('https://pokeapi.co/api/v2/pokemon/')
//     .then((reponse) => {
//         if (reponse.ok) {
//             return reponse.json();
//         } else {
//             log('error');
//         }
//     })
//     .then((response) => {
//         pokemons = response;
//         console.log(pokemons);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//#endregion

//#region fetch function

// function faireUneRequeteHttp(url) {
//     return fetch(url)
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error('error');
//             }
//         });
// }

// faireUneRequeteHttp('https://pokeapi.co/api/v2/pokemon/')
//     .then((data) => {
//         pokemons = data;
//         console.log(pokemons);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// async function faireAppel(url) {
//     let data = await fetch(url)
//     if (data.ok) {
//         return await data.json();
//     } else {
//         throw new Error(`${data.status} : ${data.statusText}`);
//     }
// };
// faireAppel('https://pokeapi.co/api/v2/pokemon/')
//     .then((response) => {
//         pokemons = response;
//         console.log(pokemons);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// faireAppel('https://pokeapi.co/api/v2/version/-5/')
//     .then((response) => {
//         pokemonInfo = response;
//         console.log(pokemonInfo);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
//#endregion

//#region fetch post

// let data = { username: 'Bambino', password: 'Test1234=' }

// let fetchOption = {
//     headers: {
//         // 'authorization' : 'token'
//         'Content-Type': 'application/json'
//     },
//     method: 'POST',
//     body: JSON.stringify(data)
// };

// fetch('https://pokeapi.co/api/v2/login', fetchOption)
//     .then((result) => {
//         if (result.ok) {
//             return result.json();
//         } else {
//             throw new Error(`${result.status} : ${result.statusText}`);
//         }
//     })
//     .then((response) => {
//         data = response;
//     })
//     .catch((e) => console.log(e));

//#endregion

//#region fetch + DOM

function faireUneRequeteHttp(url) {
    return fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('error');
            }
        });
};

const pokeList = document.getElementById('pokeList');

function fillPokeList(pokemons) {

    for (let i = 0; i < 20; i++) {
        pokeList.children[i].innerHTML = pokemons.results[i].name;
    };
}

function initList() {
    faireUneRequeteHttp('https://pokeapi.co/api/v2/pokemon/')
        .then((data) => {
            pokemons = data;
            fillPokeList(data);
        });
}