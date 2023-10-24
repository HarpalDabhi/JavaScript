console.log('Welcome to print Data List');

list=[145,45.23,'harpal',null,undefined,true,[34,56,45],{harry:50,harpal:99},BigInt(456),Symbol('hi')]

console.log(list);
console.table(list) 

for (const r of list) {
    console.log("Hi : ",r);
    console.log("Type : ",typeof r,"\n"); 
}

li=[84,45,78,1,12,45,15,12]

console.log(li);
console.log(li.length);

li[0]=100
console.log(li);

