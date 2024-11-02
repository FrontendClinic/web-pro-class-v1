// function
function mulThreeNumbers(num1, num2, num3){
    let result = num1 * num2 * num3;
    if (result % 2 ==0 ){
        console.log("result is an even number")
    }
    else{
        console.log("result is an odd number");
    }
    return result;
}