//Area when the base and height is Known
 
     const baseValue = prompt("Enter the height base of triangle: ");
     const heightValue = prompt("Enter the height of the triangle: ");

     const areaValue = (baseValue * heightValue)/2;

     console.log(
        `The area of a triangle with a height of ${heightValue} and a base of ${baseValue} is ${areaValue}`
     );