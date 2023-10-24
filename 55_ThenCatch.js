
let p1 = new Promise(function(resolve, reject) {
    console.log("Promise ... 1");
    setTimeout(() => {
        console.log("I am promise and resolved");
        resolve(true);
    }, 2000);
});

let p2 = new Promise(function(resolve, reject) {
    console.log("Promise 2 ...");
    setTimeout(() => {
        console.log("I am promise and rejected");
        reject(new Error("I am error"));
    }, 2000);
});

p1.then((value)=>{
    console.log(value);
})

p2.catch((value)=>{
    console.log(value);
})

console.log(p1);

console.log(p2);
