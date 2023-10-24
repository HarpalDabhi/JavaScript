console.log("This is Time interval");

let a=setTimeout(() => {
    alert("Hello ");
}, 4000);
console.log(a);
console.log(typeof a);
clearTimeout(a);
i=0
b=setInterval(() => {
    console.log(i)
    i++;
    if (i==5) {
        clearInterval(b);
    }
}, 1000);