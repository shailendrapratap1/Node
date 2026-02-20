

const fs = require("fs");
setImmediate(()=> console.log("set immideate"))

setTimeout(()=> console.log("Timer expired"),0)

Promise.resolve("promise").then(console.log)  

fs.readFile("./file.txt","utf8",(()=>{
    setTimeout(()=> console.log("2nd timeout"));

    process.nextTick(()=> console.log(" 2nd nexttick"))
    setImmediate(()=> console.log("2nd setImmediate"))
    console.log("file reading cb")
}))
process.nextTick(()=> console.log("nextTick"));
console.log("next line of the file")


