function addElement() {
    console.log('rentrer');
    const myList = document.getElementById('liste');
    const newLi = document.createElement('li');
    newLi.innerText = "item";
    myList.appendChild(newLi);
}