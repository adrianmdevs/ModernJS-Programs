//program to display a multiplication table

//Prompt User for input

const number = parseInt(prompt('Enter an integer: '));

//creating the multiplication table
for(let i = 1; i <=10; i++){
    //Multiply i with number
    const result = i * number;

    //Display Result
    console.log(`${number} * ${i} = ${result}`);
}