console.log('I am Back in this world');

let p6=new Promise((resolve,reject)=>{
    alert('Hey')
    setTimeout(() => {
        resolve('hi hello');
    }, 2000);
})
p6.then((value)=>{
   console.log('Now Promise Resolved');
})

p6.then(()=>{
    console.log('Hurray');
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(4);
        }, 2000);
    })
}).then((value)=>{
    console.log(value);
    
})
