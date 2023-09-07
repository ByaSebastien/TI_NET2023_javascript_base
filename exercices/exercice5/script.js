function inversion(message) {
    return message.split("").reverse().join("");
}

let input = prompt("Message : ")

alert(inversion(input));
