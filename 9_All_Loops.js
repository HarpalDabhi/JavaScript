for ( i = 0; i < 5; i++) {
//   console.log(i);
}
console.log("i ",i)


while (false) {
    // console.log(i);
    i--;
}

do {
    // console.log("done");
} while (false);

a="Harpal"
for (const x of a) {
    // console.log(x);
}

for (let i = 0; i < a.length; i++) {
    const e = a[i];
    // console.log(e);
    
}

for (const key in a) {
    if (Object.hasOwnProperty.call(a, key)) {
        const element = a[key];
        // console.log(element);
        
    }
}

obj={
    Name:'Harpal',
    Roll:13,
    Branch:'BTech'
}

for (const key in obj) {
        const element = obj[key];
            console.log(element);
}

arr=[12,45,14,15,16,17,18,19,20,21,22];

arr=arr.toString();
console.log(arr);

for (const iterator of arr) {
    // console.log(arr[iterator]);
}