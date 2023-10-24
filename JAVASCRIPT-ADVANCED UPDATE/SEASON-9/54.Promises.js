
let x1='Hello World 1.';
let b=setTimeout(() => {
    console.log('Hello World 2.');
}, 3000);
let c='Hello world 3.';

console.log(x1);

console.log(b);

console.log(c);

let promise=new Promise(function(resolve,reject)
{
    alert('Hi')
    resolve(50)
});

console.log(promise);




