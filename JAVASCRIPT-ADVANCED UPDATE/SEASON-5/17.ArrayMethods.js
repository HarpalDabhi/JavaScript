console.log('Welcome to learn JavaScript Array');


let NumArr=[45,12,78,89,23,45,78,45]
console.log(typeof NumArr);

// 1. toString --> Convert into  String
let NumStr=NumArr.toString()
console.log(NumStr);

console.log(typeof NumStr);

//2. Split by perticular divider.
let Spli=NumStr.split(',')
console.table(Spli);

//3. Find the Length of Array
let len=NumArr.length
console.log("Length Of Array : "+len);

// 4. Pop --> Remove Element From the End.
let p=NumArr.pop()
console.log(p);

// 5.  Push --> Add end of the Array.
let pu=NumArr.push(10)
console.log(pu);
console.log(NumArr);

// 6. shift --> Remove Element From the Start

let s=NumArr.shift()
console.log(s);
console.log(NumArr);

// 7. Unshift --> Add element from the start

let u=NumArr.unshift(99)
console.log(NumArr);

// 8.Reverse ---> to Convert Array in reverse Order
let r=NumArr.reverse()
console.log("Reverse Array : ",r);

// 9. Join--> To Join Pericular Jointed for array.
let n=NumArr.join('-')
console.log(n);
console.log(NumArr);

// 10. Splice an SubArray from array.
let x=NumArr.splice(2,4)
console.log("Splice :",x);
console.log(NumArr); //Can change Original array

// 11. Sort in Acsending Order
y=NumArr.sort()
console.log("Sort ",y);

// 12. Includes --> Check Find Existence.
i=NumArr.includes(99)
console.log(i);

//13. Check Indext of perticilar array member
j=NumArr.indexOf(99)
console.log('IndexOf 99 : ',j);

// 14. Delete an array member
delete NumArr[0]
console.log('Delete One',NumArr);

// 15. Concat Join To arra

let Num=[10,50,45,78,65]
Num.concat(10,20,30)
console.log("Array new :",Num);

// 16.Slice an arra = Array - Slice 
w=Num.splice(2)
console.log(w);
console.log(Num); //This will change orignial array.