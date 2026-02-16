const fs = require('fs');
const https = require("https");

console.log('hello world')

var a =1078989;
var b =90909;


fs.readFileSync("./file.txt","utf8")
console.log("")

https.get("https://dummyjson.com/products/1",(res)=> {
    console.log("fetched data successfully")
})

setTimeout(()=>{ 
    console.log("set time out after 5 seconds")
},5000)


fs.readFile("./file.txt","utf8",(err,data)=>{
    console.log("File data :",data)
})




function multiplyFn(x,y){
    const result = a*b;
    return result;
}

var c = multiplyFn(a,b);

console.log("multiplication result is: ",c);



 