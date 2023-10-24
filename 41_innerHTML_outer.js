console.log("Console message");

let a=document.body
console.log(a);

let A=document.querySelector("#A");
console.log(A);

A.innerHTML="<b> You are My heartbeart</b>";

console.log(A.nodeName);
console.log(A.nodeType);
console.log(A.nodeValue);

let B=document.querySelector("#B");

let C1=document.querySelector(".c1");
console.log(C1);

console.log(C1.nodeName);
console.log(C1.nodeType);
console.log(C1.childNodes);
console.log(C1.childNodes.length);
console.log(C1.children);
// console.log(C1.childNodes);

B.innerText="You are my Kunj of the water and  I 'm the thirsty person whi want to drink water I am really missing you very well";

console.log(document.body.firstChild.nodeName)
console.log(document.firstChild.nodeName)

console.log(document.body.firstElementChild.nodeName);

console.log(document.firstElementChild.nodeName);

console.log(B.innerText);
console.log(B.innerHTML);
console.log(B.outerHTML);

console.log(document.body.firstElementChild.textContent);

console.log(document.body.lastElementChild.textContent);

console.log(document.body.children[3].textContent);

console.clear()

