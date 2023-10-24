console.log("Welcome to Walking the DOM");

let element=document.getElementsByTagName('input')
console.log(element);

// console.log(color);

for (let i = 0; i < element.length; i++) {
    let color=element[i];
    if (i%2==0) {
    color.style.borderColor='red';   
    }
     else {
    color.style.borderColor='yellow';   
    } 
}

let form=document.getElementsByClassName('form');
console.log(form);

let docElement=document.documentElement;
console.log("Doc Element : ",docElement);




