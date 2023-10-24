console.log('h');

let pdiv=document.getElementById('pdiv');
console.log('pdiv');

let crt=document.createElement('h5');
crt.setAttribute('class', 'b-red');
crt.innerText="I am the Created element";
crt.style.textAlign='center';
crt.style.fontSize='30px';

// console.log(pdiv.prepend(crt))
// console.log(pdiv.append(crt))
console.log(pdiv.before(crt))
// console.log(pdiv.after(crt))
// console.log(pdiv.replaceWith(crt));

let a=document.createElement('a');
a.setAttribute('href','https://www.google.com');
a.style.textAlign='center';
a.style.fontSize='35px'
a.style.padding='20px'
a.style.margin='20px'
a.style.border='1px solid black';
a.style.backgroundColor='black';
a.style.color='white';
a.innerText="Google Go"
a.style.textDecoration='none';
a.style.fontWeight='bold';

console.log(document.body.replaceWith(a))
