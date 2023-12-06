//Program to check Armstrong Number of three digits

let sum = 0;
const number = prompt('Enter a three digit positive Integer: ');

//Create a temporary variable
let temp = number;
while (temp > 0){
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;
    //Removing the last digit from the  number;
    temp = parseInt(temp / 10 ); //Convert float into integer
}
//Check the condition
if(sum == number){
    console.log(`${number} is an Armstrong Number`);
}
else{
    console.log(`${number} is not an Armstrong Number`);
}