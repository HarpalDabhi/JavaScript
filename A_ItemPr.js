console.log("Hi Hellow");

let createdP=document.createElement('p');
console.log(createdP);

createdP.innerHTML='<big>You need to go to the all kind of website visit and get knowledge about the websites and designing and UX/UI and so on you need to working on it.<big>';
console.log(createdP.innerHTML);

let createDiv=document.createElement('div');
console.log(createDiv);

createDiv.classList='bg-red f-verdana f-big p-big m-big';

body=document.body;
console.log(body);

body.appendChild(createDiv);

createDiv.classList.remove('m-big');

createDiv.prepend(createdP);

createDiv.style.border='1px solid black';  

createdP.style.fontSize='1.4rem';
createdP.style.fontFamily='monospace';
createdP.style.padding='1rem';
createDiv.style.background='red';
createdP.style.textAlign='center';  

let createButton=document.createElement('button');
createButton.innerText='Subscribe !!!';

createDiv.append(createButton);

createButton.classList='b-red f-verdana ';
createButton.style.background='red';
createButton.style.fontFamily='monospace';
createButton.style.color='white';
createButton.style.padding='0.5rem 1rem';
createButton.style.textAlign='center';
createButton.style.display='block';
createButton.style.margin='auto';
createButton.style.borderRadius='2px'
createButton.style.border='1px solid white';

createButton.setAttribute('id','subscribe')
console.log(createButton.hasAttribute('id'));
console.log(createButton.getAttribute('id'));

createButton.setAttribute('title','Subscribe');

createButton.addEventListener('click', func1);

function func1(event) {
    createButton.style.backgroundColor='gray';
    createButton.style.co='black';
    createButton.innerText='Subscribed';
    alert("Subscribed!");
}

console.log(body)

createdP.addEventListener('mouseenter', func2);

function func2(event) {
    this.style.opacity='0.7';
    console.log(this.style.opacity);
}

createButton.addEventListener('mouseover', func3)

function func3(event) {
    createButton.style.cursor='pointer';
}

let createH1=document.createElement('h1');
createH1.innerText='Timeline';
createDiv.prepend(createH1);

createH1.setAttribute('id', 'h1');

createH1.style.textAlign='center';
createH1.style.border='1px solid black';
createH1.style.borderRadius='5px';
createH1.style.backgroundColor='black';

setInterval(() => {
    datedata()
}, 1000);

function datedata(){

let date=new Date();
// console.log(date);

let hours=date.getHours();
// console.log(hours);

let minutes=date.getMinutes();
// console.log(minutes);

let seconds=date.getSeconds();
// console.log(seconds);

let textTemplate=`${hours} : ${minutes} : ${seconds}`;
// console.log(textTemplate)

createH1.innerText=textTemplate

}
createH1.addEventListener('click', () =>{
    let createdTimeSaver=document.createElement('h4')
    createdTimeSaver.innerText=createH1.innerText;
    createdTimeSaver.style.textAlign="center"
    createDiv.append(createdTimeSaver)
    console.log(createdTimeSaver);
})


