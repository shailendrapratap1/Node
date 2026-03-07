// const http = require("http");
// const server = http.createServer(function(req,res){  
   
//    if(req.url === "/getSecretData"){
//     res.end("there is no  data")
//    }secret

//     res.end("hello world") 
//     // reply hello world
// });

// server.listen(7777);

const http = require("node:http");
const port =999;
const server = http.createServer(function (req,res){
server.listen(port,()=>{
    console.log("Sevrer running on port " + port)
})
})










