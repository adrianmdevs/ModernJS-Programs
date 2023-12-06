//Program to swap two variables

let firstVar = prompt('Enter the first variable:');
let secondVar = prompt('Enter the second variable:');

//temporary variable
let temp;

//Swap variables
temp = firstVar;
firstVar = secondVar;
secondVar= temp;

console.log(`The value of the first variable after swapping: ${firstVar}`);
console.log(`The value of the second variable after swapping: ${secondVar}`);