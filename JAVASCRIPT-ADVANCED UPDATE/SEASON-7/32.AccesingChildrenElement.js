console.log("I love Your Gopika");

console.log("first : ",document.body.firstChild);
console.log('last :',document.body.lastChild);

let element=document.body
console.log(element);

let Fchild=element.firstChild;
console.log(Fchild);
let Lchild=element.lastChild
console.log(Lchild);
let allNode=Array.from(element.childNodes)
console.log(allNode);

for (const a of allNode) {
    console.log(a,"\n");
    
}

console.log(942685);
