let i=1;
x=parseInt(Math.random()*100);
console.log(x);

setTimeout(() => {
    while (true) {
        y=prompt("Enter Your Number :");
        if (y>x) {
            console.log("Small Plz !");
        }
       else if (y<x) {
        console.log("Big Plz !");
       }
       else if (y==x) {
        console.log(`You win! in ${i} Tries!`);
       }
       i++;
    }
}, 1000);
