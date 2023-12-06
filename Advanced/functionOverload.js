//Javascript program to perfom function Overloading
 function sum(){
    //If no argument
    if (arguments.length == 0) {
        console.log('No Argument passed!')
    }
    //One Argument
    else if( arguments.length == 1){
        console.log('You need to pass atleast two arguments!')
    }
    //Multiple arguments
    else{
        let result = 0;
        let length = arguments.length;
        for(i=0; i < length; i++){
            result = result + arguments[i];
        }
        console.log(result);
    }
 }
 //Calling the function
 sum(); //You have not passed any argument
 sum(4); //Pass atleast two arguments
 sum(9,7); //16
 sum(8,9,4,7,1); //29