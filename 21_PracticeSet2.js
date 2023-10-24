// 1.

a=[];

for (let i = 0; i < 10; i++) {
    x=parseInt(Math.random()*100)
    // a.append(i)
    a[i]=x;
}
console.log(a)

// 2.
// b=[];
// j=0;
// do {
//     y=parseInt(Math.random()*100);
//     console.log(y);
//     b.push(y);
//     j++;
//     if (y==0) {
//         break;
//     }
// } while (true);

// console.log(b)

// 3.
let cr=[10,5,48,16,20,30,80,100,1];
console.log(cr);

function tens(x){
    return x%10==0;
}

dr=cr.filter(tens)
console.log(dr);

// 4.

sqr=cr.map(function(x){
    return x*x;
})
console.log(sqr);

// 5.

q=[1,2,3,4,5];

x=q.reduce(function(x,y){
    return x*y;
})
console.log(x);

