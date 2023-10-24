console.log('Hi Hellow To learn Map and Filter');


// Array map Method

arr=[40,5,6,451,2,45,78,5,4]
console.log(arr);

let a=arr.map((value,index)=>{
    console.log(value,index);
    return value+2
    
})
console.log(arr);
console.log("Array Using Map : ",a);

//Array Filter Method.

x=[12,45,78,1,2,36,5,48,5,12,10,25,50]

let a2=x.filter((a)=>{
    return a%5==0;
})
console.log(a2);

// Array Reduce Method 

let y=[1,2,3,4,5]
console.log(y);

let a3=y.reduce((i,j)=>{
    return i*j;
})
console.log(a3);






