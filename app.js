//  require("./xyz.js") ;
// //   const {calculateSum} = require("./calculate/sum") ;  // one module into other 
// //  const {claculateMultiply} = require("./calculate/Multiply.js")

// const util = require("node:util")

//  const data = require("./data.json")
//  console.log(JSON.stringify(data))
// const {calculateSum,claculateMultiply} = require("./calculate")
// var a =10;
//  var b =20; 

//  var name ="Namaste node js"
 
//  var x =100;

// calculateSum(a,b)
//  console.log(x)
//  claculateMultiply(a,b)
// // import{x,multipliv} from './sum.js';
// // var name ="nanna"
// // var a=90;
// // var b=90;

// // // var x=100;
// // multipliv(a,b)
// // console.log(x)  


const express = require("express")

const app = express()

app.use("/user",(req,res)=>{
    res.send("Route handler 1")
})

app.listen(7777,()=>{
    console.log("server is successfully listening on the port 7777 ...")
})