console.log('I am Promise Console');

let p1=new Promise((resolve,reject)=>{
    console.log('Promise......pending');
    setTimeout(() => {
        console.log('I am Fulfilled  With Resolvation');
        resolve(true)
        // reject(new Error("I am an Error Kumar"))
        console.log(p1);
    }, 3000);
})

let p2=new Promise((resolve,reject)=>{
    console.log('Promise......pending');
    setTimeout(() => {
        console.log('I am Fulfilled With Rejection');
        // resolve(true)
        reject(new Error("I am an Error Kumar"))
        console.log(p2);
    }, 3000);
})
console.log(p1,p2);

p1.then((value)=>{
    console.log("I am p1.then : "+value);   
})

p2.catch((value)=>{
    console.log('I am Catch : '+ value);
    
})

p2.then((value)=>{
    console.log("I am p2.then"+value);   
},(error)=>{
    console.log(error);
    
})

