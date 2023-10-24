console.log("Harpal is great!");

let p=document.getElementsByTagName("p");
console.log(p[0]);



for (let i = 0; i < p.length; i++) {
p[i].style.color="white";
p[i].style.background="black";
p[i].style.fontFamily="Helvetica";
p[i].style.fontSize="22px"
p[i].style.padding="25px";
p[i].style.margin="20px";
    
}

let h1=document.getElementById("h1");
console.log(h1);

h1.style.fontFamily="Helvetica";
h1.style.fontSize="28";
h1.style.backgroundColor="black";
h1.style.color="white";
h1.style.padding="20px";
h1.style.textAlign="center";
h1.style.margin="20px";

let hq=document.querySelector('#h1');
console.log(hq.innerHTML);
hq.innerText="Kinjal is my Dear Sister and I love her a lot";

let p1=document.querySelector('.para');
console.log(p1);
p1.innerText="I am writing about the para graph about the using the direction of the person and the direction of new perso nwere end of the paragraph";

console.clear();

let p2=document.querySelectorAll('.para')[1];
console.log(p2);

p2.innerHTML = "<big>I am paragraph in the big tag using innerHTML and use of the all query selector can i know very well.No i ldont have an y issues you can carrry on .</big>";