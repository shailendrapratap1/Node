// a= 100
// Last line of the line
//process.nextTick
// promise
// timer
//setImmediate
// file reading


const fs = require('fs')
const a = 100;
setImmediate(()=> console.log("set Immediate"))

Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt","utf8",()=>{
    console.log("file reading cb")
})

setTimeout(()=> console.log("Timer expired"),0);

process.nextTick(()=> console.log("process.nexttick"))


function printA(){
    console.log("a=",a);
}
printA();
console.log("Last line of the file")