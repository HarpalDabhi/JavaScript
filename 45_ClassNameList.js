console.log("Welcome to the Class List");

let ptag=document.getElementById('ptag');
console.log(ptag);

ptag.classList="b-red t-white t-font";
console.log(ptag);

console.log(ptag.classList)

console.log(ptag.classList.remove('b-red'))
console.log(ptag.classList.add('t-black'));

console.log(ptag.classList.contains('t-black'));
console.log(ptag.classList.contains('t-font'));
console.log(ptag.classList.contains('t-fontw'));

console.log(ptag.classList.toggle('b-red'));
console.log(ptag.classList);
console.log(ptag.classList.remove('t-black'));