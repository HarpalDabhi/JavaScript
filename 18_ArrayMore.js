a=[0,11,2,3,4,5,6,7,8,9];

b=['a', 'b', 'c', 'd', 'e'];

c=['A', 'B', 'C', 'D', 'E'];

console.log(JSON.stringify(a));

console.log(typeof(a));

console.log(a.length);

abc=a.concat(b,c);
console.table(abc);

console.log(abc.sort());

let compare=(x,y)=>{
    return x-y;
}

console.log(compare(10,20));

abc.sort(compare);

console.log(abc);

abc.splice(2,10,1000,100);

console.log(abc);

o=abc.slice(1,9)
console.log(o);