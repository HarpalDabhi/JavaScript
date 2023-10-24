console.log("console written..");

console.log(window);

console.log(window.console);

console.warn("You entered ");

console.log(window.length);

console.log(window.innerWidth);

console.log(window.innerHeight);

document.body.style.backgroundColor="red";

console.log(document);

console.log(document.body.TEXT_NODE)

// console.log(document.body.textContent);

console.log(document.all[10]);

x=document.all;
console.log(x);

for (let i = 0; i < x.length; i++) {
    const e = x[i];
    console.log(e);
}
console.log(typeof(x));