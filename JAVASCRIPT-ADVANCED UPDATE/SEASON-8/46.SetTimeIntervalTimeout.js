let x=setTimeout(function(){
    console.log('You are My Love Gopi');
    
},5000);
clearTimeout(x)
console.log(x);


let a=document.getElementById('h1');
let j;
let m=setInterval(() => {
j=new Date() 
a.innerText=j;  
}, 1000);
clearInterval(m)
console.log(m);

setTimeout(()=>  {
    sum(15,15)
    console.log(sum(15,15));
    
}, 1000);

function sum(a,b){
    return a+b;
}

setInterval(() => {
    console.log(sum(15+1));
    
}, 1000);





