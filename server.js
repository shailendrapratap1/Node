const http = require("http");
const server = http.createServer(function(req,res){  
   
   if(req.url === "/getSecretData"){
    res.end("there is no secret data")
   }
   
   
    res.end("hello world") 
    // reply hello world
});

server.listen(7777);












