const nameString  = "aladesiun_temitope_seyi_titi_damola_mercy";
const splittedString = nameString.split("_"); //has been converted to an array
const length = splittedString.length //the length of our string
const lastName = splittedString[length - 1];


// console.log(nameString.split("_")[nameString.split("_").length-1]);

// FUNCTIONS
// function addTwoNumbers(num1, num2){
//     let result = num1 + num2;
//     console.log("our function is still running");
//     // return result;
// };

// console.log(addTwoNumbers(1,6));
// write a function to multiply 3 numbers and check if the result is an even 
//number or number
const addTwoNumbers = (num1, num2)=>{
    let result = num1+num2;
    // if (result is kinikan) {
    //     console.log("even");
    // }else {
    //     console.log("odd");

    // }
    return num1+num2;
}

console.log(addTwoNumbers(2,5));

