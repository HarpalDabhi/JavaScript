console.log('I am writing promise api here');

let p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Promise 1')
    }, 2000);
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        // resolve('Promise 2')
        reject(new Error(`I'm Gopi's Error `))
    }, 1000);
})

let p3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Promise 3')
    }, 3000);
})

// p1.then((x)=>{
//     console.log(x);
// })

// p2.then((y)=>{
//     console.log(y);
// })

// p3.then((z)=>{
//     console.log(z);
// })


// let PromiseAll=Promise.all([p1,p2,p3])
// PromiseAll.then((x)=>{
//     console.table(x);
// })


// let PromiseSet=Promise.allSettled([p1,p2,p3])
// PromiseSet.then((x)=>{
//     console.table(x);
// })


// let PromiseRace=Promise.race([p1,p2,p3])
// PromiseRace.then((x)=>{
//     console.table(x);
// })


// let PromiseAny=Promise.any([p1,p2,p3])
// PromiseAny.then((x)=>{
//     console.table(x);
// })


// let PromiseResolve=Promise.resolve([p1,p2,p3])
// PromiseResolve.then((x)=>{
//     console.table(x);
// })


let PromiseReject=Promise.reject([p1,p2,p3])
PromiseReject.then((x)=>{
    console.table(x);
})