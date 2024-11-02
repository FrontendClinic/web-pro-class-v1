// write a fuction to multipy 3 number and check if the result is an even number or odd number

// let multipyNum = (num1, num2, num3)=>{
//     let result = num1*num2+num3;
//     if (result%2==0){
//         console.log("even")
//     }else{
//         console.log("odd")
//     }
//     return(result);
// }

// console.log(multipyNum(5,6,2));


// let name = "Tommy";
// let age = 50;
// let isStudent = true;

// // let result = "name + is of age + age + and he's a student: + isStudent";
// console.log(name + " is of age " + age + " and he's a student:" + isStudent);

// Print a sentence that combines all three variables, like:

// 1.	Declare two variables num1 and num2, and assign them any two numbers.
// 2.	Calculate and print the result of adding, subtracting, multiplying, and dividing these numbers.
// Challenge: Use template literals to print out each operation like:

// let num1 = 6;
// let num2 = 5;
// let result = num1 % num2;
// console.log (result);



// 1.	Create an array fruits with at least 5 fruits as strings.
// 2.	Print the entire array.
// 3.	Print the first and last elements in the array.
// 4.	Add a new fruit to the end of the array and print the updated array.
// 5.	Remove the first fruit and print the updated array.

// const fruits = ["orange", "mango", "apple"," pear", "carrot"];

// fruits.shift();
// console.log(fruits);

let car = {
    make: "Toyota",
    model: "V8",
    year: "2017",
    color: "Green",
    features: ["Bluetooth", "GPS", "Sunroof"],
    previousOwners: [
        {
            name: "John",
            yearPurchased: "2005"
        }
    ]
}

console.log("Full Car Object:", car);

function printCarInfo (car) {
    console.log(`The car is a ${car.color} ${car.year} ${car.make} ${car.model}.`);
    console.log(`Features: ${car.features.join(", ")}.`);
        
        }

        printCarInfo(car);

        











