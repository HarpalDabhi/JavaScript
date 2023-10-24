console.log("Welcome to Function Video");

// No Argument With Return --> NAWR
function hello(){
    console.log("Hello Good Morning");
    return "Great"
}
a=hello()
console.log(a);

// No Argument No Return --> NANR
nice=()=>{
    console.log("Hava a Nice date");
}
nice();

// With Argument With Return --> WAWR

sum=(x,y)=>{
    return x+y;
}
r=sum(12,45)
console.log(r);

// With Argument No Return --> WANR

sqr=(x,y)=>{
    console.log(x**y)
}
s=sqr(2,5)
console.log(s);


