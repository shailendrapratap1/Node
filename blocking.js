const crypto = require("node:crypto")

console.log("hello world")
var a = 10986785;
var b = 20986;



//pbkfd2 pasword based key derative function
//synchrounous function will block the main thread dont use it
crypto.pbkdf2Sync("password","alt",5000000,50,"sha512")
console.log("Key is generated")

setTimeout(()=>{
    console.log("call me asap")
},0)
// async function
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("key is generated")
}) 

function multiplyFn(a,b){
const res= a*b;
return res
}
 
var c= multiplyFn(a,b);
console.log("multiplication result is : ", c);
 