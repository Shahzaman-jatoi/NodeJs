const { rejects } = require("assert");
const { resolve } = require("path");

var a = 10;
var b = 0;

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        b = 30;
        resolve(b);
    },2000)
})
promise.then((b)=>{
    console.log(a+b);
})