let myString = 'Hello world';
console.log(typeof (myString));
myString = '5';
console.log(typeof (myString));
let myNumber = 5;
console.log(typeof (myNumber));
console.log(myString === myNumber);
let numbers = [1, 2, 3, 4, 5];
let myBool = true;
const PI = 3.14;
console.log(typeof (numbers));
let myDate = new Date();
console.log(myDate);
let birthdate = new Date(1991, 2, 27, 13, 30, 0, 0)
console.log(birthdate);

let myName = prompt('Nom :');
alert(myName);
console.log(myName);
console.warn(myName);
console.error(myName);

// let age = parseInt(prompt("Age :"));
let age = Number(prompt("Age :"));

console.log(age + 5);