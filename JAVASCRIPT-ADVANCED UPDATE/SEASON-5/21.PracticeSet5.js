console.log('Welcome to sollve Practice set 5');

// 1. Take input from user and add it into array
// arr=[10,12,45]
// console.log(arr);

// a=prompt('Enter Number : ')
// a=parseInt(a)
// // console.log(typeof a);
// arr.push(a)
// console.log(arr);

// 2. Practice problem 2

// arr2=[10,12,45]
// console.log(arr2);

// do {
// b=prompt('Enter Number : ')
// b=parseInt(b)
// console.log(typeof a);
// } while (b!=0);
// arr2.push(b)
// console.log(arr2);


// 3. Make Function filter for find 10 divisibles
let Q=[10,20,25,80,65,35,90,100]

let q=Q.filter((j)=>{
    return j%10==0
})
console.log(q);

// 4. Return a array to give square of given array

let s=Q.map((o)=>{
    return o*o;
})
console.log(s);

// 5. return a factorial using reduce method

let M=[1,2,3,4,5]

let m=M.reduce((V,v)=>{
    return V*v;
})
console.log(m);






