// Synchronously
/*
let a=prompt("Enter Your Name");
let b=prompt("Enter Your Sister Name : ");
console.log(a,b);
*/

let script;


function loadScript(src,callback){
    script=document.createElement('script');
    script.src=src;
    document.body.appendChild(script);
    script.onload=function(){
        console.warn("Script loaded successfully");
        callback(null,src);
    }
}

src=`https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js`;
// src=`https://dn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js`;


function hello(error,src){
    // console.log("I am a Hellow world!");
    if (error,src) {
        console.warn(error);
    }
}
loadScript(src,hello)