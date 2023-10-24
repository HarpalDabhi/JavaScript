console.log('I love You so much my dear jaan');

// 1. 
let nav=document.getElementsByTagName('nav');
console.log(nav);
console.log(nav[0].firstElementChild.style.color='orange');

//3.
console.log(nav[0].firstElementChild.style.textDecoration='underline');

//4.
let item=document.getElementsByClassName('navbarItem')
console.log(item);

item[0].style.backgroundColor='yellow';
item[1].style.backgroundColor='yellow';
item[2].style.backgroundColor='yellow';

//5.
document.body.style.backgroundColor='black' ;
document.body.style.color='white' ;

