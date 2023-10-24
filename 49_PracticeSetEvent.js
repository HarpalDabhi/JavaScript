let x=document.body
console.log(x.innerHTML);
x.innerHTML=null;

// let y=document.createElement('img');
// y.setAttribute('src','Heart.png');

// x.prepend(y);
// y.setAttribute('width','10%');
// y.style.display='block';
// y.style.margin='auto';
// y.style.boxShadow='1px 1px 5px 1px red';
// y.style.borderRadius='70%'
i=0
setInterval(() => {
    // console.log(i);
    if (i%2==0) {
        x.style.backgroundColor='green';
    }
    else if (i%3==0) {
        x.style.backgroundColor='blue';
    }
    else if (i%5==0) {
        x.style.backgroundColor='red';
    }
    else if (i%7==0) {
        x.style.backgroundColor='yellow';
    }
    else{
        x.style.backgroundColor='black';
    }
    i++;
}, 1000);