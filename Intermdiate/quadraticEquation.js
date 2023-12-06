//Program to solve a quadratic equation
let root1, root2;

let firstNum = prompt('Enter the first Number: ');
let secondNum = prompt('Enter the second Number: ');
let thirdNum = prompt('Enter the third Number: ');

//Calculate discriminant
let discriminant = secondNum * secondNum -4 *firstNum * thirdNum;

//Condition for real and different roots;

if(discriminant > 0){
    root1 =(-secondNum + Math.sqrt(discriminant))/(2 * firstNum);
    root2 = (-secondNum - Math.sqrt(discriminant))/(2 * firstNum);

    //Result
    console.log(`The roots of quadratic equations are ${root1} and ${root2}`);
}
//Condition for real and equal roots
else if(discriminant == 0){
    root1 = root2 = -secondNum/(2 * firstNum);

    //result

 console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
//Roots are not equal
else{
    let realPart = (-secondNum/ (2 * firstNum)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant)/ (2 * firstNum)).toFixed(2);

    //result
    console.log(`The roots of quadratic equation are ${realPart}+ ${imagPart} i and ${realPart} - ${imagPart} i`);
}

