let a=100*Math.random()
a=parseInt(a)
console.log(a);
let h2=document.getElementById('h2');
let para=document.getElementById('para');
console.log(para);

console.log(h2);

let count=0;
do {
num=prompt('Enter Your Nuber')
 
if (num>a) {
    // console.log('Lower Plz!');  
    h2.innerText='Lower Number Please!';
} 
else if (num<a) {
    // console.log('Higher Plz!');
    h2.innerText='Higher Number Please';
}  
else if (num==a) {
    // console.log('Write Choice');
    h2.innerText='You Won right choice!';
} 
count++
} while (num!=a);
// console.log(`You have got ${count} try`);
para.innerText=`You had ${count} Tried.`




