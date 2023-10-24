let p1=new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject(1);
    }, 1000);
})

p1.then(()=>{
    console.log("1");
})

let p2=new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(21);
    }, 8000);
})

p2.then(()=>{
    console.log("2");
})

let p3=new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(3);
    }, 3000);
})

p3.then(()=>{
    console.log("3");
})


// let promiseAll = Promise.all([p1,p2,p3]);
// promiseAll.then((value)=>{
//     console.log(value);
// });


// let promiseAllSt = Promise.allSettled([p1,p2,p3]);
// promiseAllSt.then((value)=>{
//     console.log(value);
// });


// let promiseRace = Promise.race([p1,p2,p3]);
// promiseRace.then((value)=>{
//     console.log(value);
// });


let promiseAny = Promise.any([p1,p2,p3]);
promiseAny.then((value)=>{
    console.log(value);
});

console.log(promiseAny);

let Resolve=Promise.resolve(10);
console.log(Resolve);

let Reject=Promise.reject(new Error("Error"));
console.log(Reject);