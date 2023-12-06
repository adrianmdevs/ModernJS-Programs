//Displaying Fibonacci sequence upto nth term using Recursion
function fibonacci(num){
    if(num < 2){
        return num;
    }
    else{
        return fibonacci(num-1)+ fibonacci(num -2);
    }
};
//Prompt user for nth term
const nTerms = prompt("Enter the Number of terms: ");

if(nTerms <=0){
    console.log("Enter a positive integer. ");
}
else{
    for(let i=0; i < nTerms; i++){
        console.log(fibonacci(i));
    }
}