console.log("I'll Start String Property");

let str=`a computer program that lets you look at words and pictures from other computer systems by receiving information through telephone wires`;

console.log(str);

let para=document.getElementById('para')
console.log(para);

para.innerText=str.toUpperCase() + str.toLowerCase()

let mark=document.getElementById('mark').innerText;
console.log(mark);
let updatedmark=mark.replace('computer','Computer(Mini Robo)')
console.log(updatedmark);

console.log(mark.length);

console.log(mark.slice(2,10));

slc=mark.slice(10,30)
console.log(slc);

let add=' is My Sister'
let prv='Purvi '
console.log(prv.concat(" ",add));











