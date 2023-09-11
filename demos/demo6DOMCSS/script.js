const title = document.getElementById('title');

title.addEventListener('click', () => changeColor());

function changeColor() {
    if (title.classList.contains('red')) {
        title.classList.remove('red');
        title.classList.add('chartreuse');
    } else {
        title.classList.remove('chartreuse');
        title.classList.add('red');
    }
};

const myList = document.getElementById('myList');

for (let li of myList.children) {
    li.addEventListener('click', (e) => {
        const elem = e.target;
        elem.innerText = "coucou";
    });
}