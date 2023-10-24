let id1=document.getElementById('i1');
console.log(id1);

let c1=document.querySelector('.c1');
console.log(c1);

let A=document.querySelector('#A');
let a=document.querySelector('#a');


console.log(c1.contains(A));
console.log(c1.contains(c1));
console.log(c1.contains(id1));
console.log(c1.contains(a));

console.log(c1.matches('#i1'));
console.log(A.matches('.na'));

console.log("new" +c1.closest('#i1'));

console.log(c1.closest('#i1'));

console.log(A.closest('#i1'));