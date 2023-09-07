function addElement() {
    console.log('rentrer');
    const myList = document.getElementById('liste');
    const newLi = document.createElement('li');
    const input = document.getElementById('input');
    if (input.value.trim() !== "") {

        newLi.innerText = input.value;
        myList.appendChild(newLi);
    }
    input.value = "";
}