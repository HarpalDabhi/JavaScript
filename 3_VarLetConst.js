// Var

var a=100; //Global variable
console.log(a);
{
    a=101;
    console.log(a);
}
console.log(a); 

var b=10; //Global variable
console.log(b);
{
    var b=11;
    console.log(b);
}
console.log(b);

// Let
let x=50;
console.log(x);
{
    x=51;
    console.log(x); //Global variable
}
console.log(x);

let y=30;
console.log(y);
{
    let y=31; // Local variable
    console.log(y);
}
console.log(y);

// Const

const z=100; //Global variable
console.log(z);
{
   const z=101;
    console.log(z);
}
console.log(z)