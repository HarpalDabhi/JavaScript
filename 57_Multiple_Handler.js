let p1=new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log('Hello world');
        alert("Hello world!");
    }, 1000);
    resolve(0);
});

console.log(p1)

p1.then(()=>{
    console.log("You have successfully");
})

p1.then(()=>{
    console.log("You have successfully finished");
});

p1.then(()=>{
    document.body.style.backgroundColor='red';
});

p1.then(()=>{
    setTimeout(() => {
        location.href = `https://mail.google.com/mail/u/0/#inbox`;
    }, 120000);
});

p1.then(()=>{
    let p=document.createElement('p');
    p.innerHTML=`Thre is the paragraph`;
    p.setAttribute('title', 'paragraph');
    document.body.prepend(p);
});