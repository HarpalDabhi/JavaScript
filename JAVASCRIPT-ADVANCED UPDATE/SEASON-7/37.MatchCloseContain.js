console.log("Welcome in the Matches");

//  Mathches

let element=document.getElementsByTagName('li')
console.log(element);

console.log(element[0].matches('listItem'));

console.log(element[4].matches('.listItem'));

console.log(element[4].matches('#services'));

// Closest .

console.log(element[3].closest('.listItem'));
console.log(element[4].closest('.listItem'));

let h2=document.getElementById('h2')
console.log(h2.closest('.h2head'));

// Containes

let fbox=document.querySelector('#firstbox')

let box=document.querySelectorAll('.box')
console.log(box);

console.log(fbox);

console.log(box[0].contains(fbox))
console.log(box[1].contains(document.getElementById('about')))






