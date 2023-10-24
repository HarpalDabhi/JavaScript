console.log('Welcome in Async/Await');

// async function ram(){
//     return 10;
// }
// ram().then((x)=>{
//     console.log(x);
// })

async function ramyan(){
    let ram= new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Sita Mata')
        }, 1000);
    })

    let laxman= new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Urmila Mata')
        }, 3000);
    })

    let bharat= new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Mandavi Mata')
        }, 6000);
    })

    let shatrughna= new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Shrutkirti Mata')
        }, 8000);
    })

    // ram.then(alert)
    // laxman.then(alert)
    // bharat.then(alert)
    // shatrughna.then(alert)
    console.log('Ram');
    let R=await ram
    console.log('Sita');
    
    console.log('Laxman');
    let L=await laxman
    console.log('Urmila');

    console.log('Bharat');
    let B=await bharat
    console.log('Mandavi');
    console.log('Shatrughna');
    let S=await shatrughna
    console.log('Shrutkirti');
    
    return [R,L,B,S]
}

console.log(`Welcome in Ramayan`);
let x=ramyan()
x.then((value)=>{
    console.log(value);
    
})
// console.log(x);


