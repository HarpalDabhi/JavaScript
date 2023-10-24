let p1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('resolved after 5 sec.');
        resolve(50)
    }, 2000);
})

p1.then((value)=>{
    console.log(value);
    let p2=new Promise((resolve,reject)=>{
        resolve("Promise 2.O")
    })
       return p2    
}).then(()=>{
    console.log('we are done');
}).then(()=>{
    console.log('We are Pakka Done');
})


const loadScript=(src)=>{
    return new Promise((resolve,reject)=>{
        let script=document.createElement('script')
        script.type="text/javascript"
        script.src=src
        document.body.appendChild(script)
        script.onload=(script)=>{
            resolve("Script has been loaded Sir!")
        }
        script.onerror=()=>{ reject(0)}
    })
}

let p4  =loadScript('54.Promises.js')
p4.then((value)=>{
    console.log(value);
    return loadScript('54.Promises.js')
}).then((value)=>{
    console.log('Second Script ready');
}).catch((error)=>{
    console.log(`WE are sirry we can't load script`);
    
})