//Multiplication table up to a Specified range

const number = parseInt(prompt('Enter an Integer: '));

const range = parseInt(prompt('Enter a range'));

for(let i = 1; i <= range; i++){
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}