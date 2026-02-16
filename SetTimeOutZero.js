console.log("helo world")

var a = 90989897;
var b=878372873;
setTimeout(()=>{
    console.log("call me asap")
},0)

function multiplyFn(a,b){
    const res = a*b;
    return res
}

var c = multiplyFn(a,b);
console.log("multiplication result is :", c)

