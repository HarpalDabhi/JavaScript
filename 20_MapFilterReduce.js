a=[1,2,3,4,5,6,7,8,9,1];

function sqr(x){
    return x*x;
}
b=a.map(sqr)
console.log(b)

function even(x){
    return x%2==0;
}
c=a.filter(even);
// console.log(c)

function sum(x,y){
    return x*y;
}

o=c.reduce(sum);
// console.log(o)
