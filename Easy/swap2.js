//Javascript program to swap two variables using es6 destructruing assignment

//Prompt user for input
let firstNum = prompt('Enter the first Number');
let secondNum = prompt('Enter the second Number');

//Employ the destructuring assignment
[firstNum,secondNum]=[secondNum,firstNum];

 console.log(`The value of the first Number after swapping ${firstNum}`);
 console.log(`The value of the second Number after swapping is ${secondNum}`);