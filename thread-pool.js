const fs = require("fs");


const crypto = require("crypto")

process.env.UV_THREADPOOL_SIZE = 10;

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
   console.log("1 - cryptoPBKF2done")
});
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
   console.log("2 - cryptoPBKF2done")
});
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
   console.log("3 - cryptoPBKF2done")
}); 
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
   console.log("4 - cryptoPBKF2done")
});
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
   console.log("5 - cryptoPBKF2done")
});