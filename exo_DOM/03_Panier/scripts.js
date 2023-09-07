const articles = document.getElementById('articles');
const panier = document.getElementById('panier');
const inputPrix = document.getElementById('prix');
inputPrix.value = 0;

function addToCart(id) {
    let article = articles.lastElementChild.children[id].firstElementChild.innerHTML;
    let prix = Number(articles.lastElementChild.children[id].children[1].innerHTML);

    console.log(article);
    console.log(prix);

    //<tr></tr>
    const newTr = document.createElement('tr');
    //<td></td>
    const articleTd = document.createElement('td');
    //<td></td>
    const prixTd = document.createElement('td');

    //<td>Chaise</td>
    articleTd.innerText = article;
    //<td>25</td>
    prixTd.innerText = prix;

    // <tr>
    //     <td>Chaise</td>
    // </tr>
    newTr.appendChild(articleTd);
    // <tr>
    //     <td>Chaise</td>
    //     <td>25</td>
    // </tr>
    newTr.appendChild(prixTd);

    //<tbody>
    //   <tr>
    //     <td>Chaise</td>
    //     <td>25</td>
    //   </tr>
    //</tbody>
    panier.children[1].appendChild(newTr);

    inputPrix.value = Number(inputPrix.value) + prix;
}