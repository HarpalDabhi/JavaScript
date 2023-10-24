console.log("Welcome  to Search the DOM");

let btn=document.getElementById('submit');
console.log(btn);
btn.style.boxShadow='1px 1px 10px 1px white';

let h2=document.getElementsByTagName('h2');
console.log(h2);

let input=document.getElementById('inputName')
console.log(input);

let Q=document.querySelector('form')
console.log(Q);

Q[0].style.borderColor='orange';
Q[2].style.borderColor='orange';
Q[4].style.borderColor='orange';
Q[6].style.borderColor='orange'; 

let q=document.querySelectorAll('form')
console.log(q);
Q.style.color='yellow';





