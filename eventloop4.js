const fs = require("fs")

setImmediate(()=> console.log("setImmediate"))
setTimeout(()=> console.log("timer expired"),0)

Promise.resolve("promise").then(console.log   )

fs.readFile("./file.txt","utf8",()=>{
    console.log("file reading cb")
})



process.nextTick(()=>{
    process.nextTick(()=> console.log("process nexttick"))
    console.log("nextTick")

})

console.log("last line of the file")