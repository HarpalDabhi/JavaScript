console.log('How are you');

// Syncronous Programming

// let a=prompt('What is Your Name')
// let b=prompt("what is Your age")
// let c=prompt('what is Your favourite color')
// console.log(`${a} is ${b} years old and his favcolor is ${c}.`)

// Asynchronous Programming.
// console.log('start');
// setTimeout(() => {
    // console.log('I am In.');  
// }, 3000);
// console.log('end');

// Callbacks

function loadScript(src,callback){
    var script=document.createElement('script');
    script.src=src;
    script.onload=function(){
        console.log(`Loaded Script : ${src}.`);
        callback(null)
         }

         script.onerror=function(){
            console.log('Erro find In load Src');
            callback(new Error('src not found'))
         }
    document.body.appendChild(script)
}

function hello(error){
    alert('Hello World')
}
function goodMorning(){
    alert('Good Morning')
}
loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',hello)

