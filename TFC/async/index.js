function fetchData(callback, time) {
     return new Promise((resolve, reject) => {
        let result = false;
        if (result) {
            resolve("our promise was a success")
        } else {
            reject("our promise was bad")
        }
    })
}


// fetchData(() => {

// }, 2000).then(result => {
//     console.log(result, "log inside resolve");

// }).catch((error) => {
//     console.log(error);

// }).finally(()=>{
//     console.log("finally");
    
// });


let response = async() => {
 
   try {
    let result =  await fetchData(() => {}, 2000);
    console.log(result);
   } catch (error) {
    console.log(error);
    
   }
}
response();