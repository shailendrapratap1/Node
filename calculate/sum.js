//  module protects their values and functions from leaking
 
 console.log("Sum Module Executed")
  

 x ="hello world"
 function calculateSum(a,b){

    const sum = a+b;
    console.log(sum)
     }

     console.log(module.exports)
     module.exports = {
        x,calculateSum,
    };
    // module.exports.x =x;
    // module.exports.calculateSum=calculateSum;


    // export var x="hello world"
    // export function multipliv(a,b){
    //     const mul = a*b;
    //     console.log(mul)
    // }
    // module.exports ={
    //     x,multipliv
    // }