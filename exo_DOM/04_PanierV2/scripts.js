const articles = document.getElementById('articles');
const panier = document.getElementById('panier');
const inputPrix = document.getElementById('prix');
inputPrix.value = 0;

function addToCart(id) {
    let article = articles.lastElementChild.children[id].firstElementChild.innerHTML;
    let prix = Number(articles.lastElementChild.children[id].children[1].innerHTML);

    console.log(article);
    console.log(prix);

    for (const existingTr of panier.children[1].children) {
        if (existingTr.children[0].innerHTML === article) {
            let count = Number(existingTr.children[2].innerHTML);
            existingTr.children[2].innerHTML = count + 1;
            changePrice(prix);
            return;
        }
    }

    //<tr></tr>
    const newTr = document.createElement('tr');
    //<td></td>
    const articleTd = document.createElement('td');
    //<td></td>
    const prixTd = document.createElement('td');

    const countTd = document.createElement('td');

    //<td>Chaise</td>
    articleTd.innerText = article;
    //<td>25</td>
    prixTd.innerText = prix;

    countTd.innerText = 1;

    // <tr>
    //     <td>Chaise</td>
    // </tr>
    newTr.appendChild(articleTd);
    // <tr>
    //     <td>Chaise</td>
    //     <td>25</td>
    // </tr>
    newTr.appendChild(prixTd);

    newTr.appendChild(countTd);
    //<tbody>
    //   <tr>
    //     <td>Chaise</td>
    //     <td>25</td>
    //   </tr>
    //</tbody>
    panier.children[1].appendChild(newTr);

    changePrice(prix);
}

function removeFromCart(id) {
    let article = articles.lastElementChild.children[id].firstElementChild.innerHTML;
    let prix = Number(articles.lastElementChild.children[id].children[1].innerHTML);

    console.log(article);
    console.log(prix);

    for (const existingTr of panier.children[1].children) {
        if (existingTr.children[0].innerHTML === article) {
            let count = Number(existingTr.children[2].innerHTML);
            if (count - 1 > 0) {
                existingTr.children[2].innerHTML = count - 1;
            } else {
                panier.children[1].removeChild(existingTr);
            }
            changePrice(-prix);
            return;
        }
    }
}

function changePrice(prix) {
    inputPrix.value = Number(inputPrix.value) + prix;
}