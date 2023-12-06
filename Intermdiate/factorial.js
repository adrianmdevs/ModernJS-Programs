//Program to find factorial of a number

const number = parseInt(prompt('Enter a Positive Integer: '));

//Check if number is negative
if(number < 0){
    console.log('Error! Factorial for negative number does not exist. ')
}
//Check if number is Zer0
else if(number == 0){
    console.log(`The factorial of ${number} is 1.`);
}
//Number is Positive
else{
    let fact = 1;
    for(i=1; i <=number; i++){
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}