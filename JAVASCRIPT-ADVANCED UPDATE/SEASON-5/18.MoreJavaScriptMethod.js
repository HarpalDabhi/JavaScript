console.log('Welcome to Learn More JavaScript Array Methods.');

let num=[0,1,2,3,4,5,6,7,8,9]
let num2=[10,11,12,13,14,15,16,17,18,19]
let num3=[10,11,2,13,41,5,16,71,8,191]
 
// 1. Concatenation
let con=num.concat(num2,num3)
console.log(con);

let Friends=['Harpal','vishal','Vishal','Kinjal','kinjal','Purvi']
console.log(Friends);

// 2. Sort Alphabatically
Friends.sort()
console.log("Sort ",Friends);

// 3. Delte First Friend but even exist empty place
delete Friends[0]
console.log(Friends); // length will not change 

a=[5,10,15,50,45,30,40,35]
console.log(a);

// 4. Splic two give argument this can change original array
let b=a.splice(4,3)
console.log(b);

console.log(a);

// 5. Two create new subArray from arra
let c=a.slice(0,3)
console.log(c);
console.log(a);

x=[5,150,15,50,45,30,40,35]
x.reverse()
console.log(x);
x.sort()
console.log(x);