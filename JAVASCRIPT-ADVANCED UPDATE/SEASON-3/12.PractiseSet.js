// 1. Write a programm to Print marks of students.

const marks={
    'Harpal':100,
    'Vishal':150,
    'Kinjal':100,
    'Purvi':156
}
console.log(marks);

for (const key in marks) {
    console.log(`${key} : marks --> ${marks[key]}`);
    
}

// 2. Write a loop until answer is not write


// let a=50
// let b=prompt('Enter Num : ')
// while(b!=a){
//     b=prompt('Try again')
// }
// alert('Correct hai yarr!');


//3.Wrtie a Function which return mean of 5 numbers.

const mean=(a,b,c,d,e)=>{
return (a+b+c+d+e)/5;
}
console.log(mean(50,50,50,50,0));


