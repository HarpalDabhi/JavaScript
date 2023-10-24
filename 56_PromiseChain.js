let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("resolve after 2 seconds");
    }, 2000);
    resolve(1);
})

p1.then((value) => {
    console.log(value);
    let p2 = new Promise((resolve) => {
    resolve("Promise 2");
    });
    return p2;
}).then((value) => {
    setTimeout(() => {
    console.log("We are done");
}, 4000);

}).then((value) => {
    setTimeout(() => {
        console.log("We are done pakka");
    }, 6000);
});


const loadScripts = (src) =>{
    return new Promise((resolve, reject)=>{
        let script=document.createElement("script");
        script.type = "text/javascript";
        script.src=src;
        document.body.appendChild(script);
        script.onload = () =>{
            resolve(true);
        }
        script.onerror = () =>{
            reject(false);
        }
    })
}

let l1=loadScripts(`https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js`)

console.log(l1);

l1.then((value) =>{
    console.log("Value of : ",value);
}).catch((err) =>{
    console.log("Error : ",err);
});