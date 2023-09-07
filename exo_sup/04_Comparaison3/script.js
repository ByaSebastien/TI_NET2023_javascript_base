let a = prompt("nb1 : ");
let b = prompt("nb2 : ");
let c = prompt("nb3 : ");
let numbers = [a, b, c];


numbers.sort((a, b) => (a - b));

alert(numbers[0] + (numbers[0] === numbers[1] ? " = " : " < ") + numbers[1] + (numbers[1] === numbers[2] ? " = " : " < ") + numbers[2]);