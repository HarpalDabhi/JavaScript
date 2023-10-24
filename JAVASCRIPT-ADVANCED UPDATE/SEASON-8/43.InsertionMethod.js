console.log(`What's up bro and how are you ? I hope you are fine`);

let a=document.getElementsByTagName('div')[0];
console.log(a);
a.innerHTML='<h2>Harpal is Great in the Universe. </h2>';

let btn=document.createElement('button')
btn.setAttribute('class','btn-click kick')
btn.setAttribute('id','btn')
btn.innerHTML='<b>Submit</b>'
btn.style.color='red';
btn.style.padding='3px 25px';
btn.style.backgroundColor='black'
btn.style.border='none'
btn.style.borderRadius='5px'
btn.style.fontSize='28px'
a.append(btn)

