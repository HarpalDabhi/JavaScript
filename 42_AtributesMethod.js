console.log('Consoel was successfully');

let p1=document.getElementsByClassName('b-red')[0];
console.log(p1);

console.log(p1.hasAttribute('class'));
console.log(p1.hasAttribute('id'));

let h2=document.getElementById('h2');
console.log(h2);
console.log(h2.hasAttribute('id'));

console.log(h2.getAttribute('class'));
console.log(p1.getAttribute('class'));

console.log(p1.removeAttribute('class'));

console.log(p1.hasAttribute('class'));

let hpara=document.getElementById('hpara');
console.log(hpara);

console.log(hpara.getAttribute('title'));

console.log(hpara.getAttribute('id'));

console.log(hpara.getAttribute('class'));

console.log(hpara.setAttribute('class','t-white'));