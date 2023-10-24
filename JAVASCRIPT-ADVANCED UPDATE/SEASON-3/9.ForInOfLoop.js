// For Loop Print 1 to 5.

for (let i = 1; i <=5; i++) {
    console.log(i);
}

// For in Loop for Objects.

marks={
    Vishal:80,
    Kinjal:90,
    Harpal:50,
    Purvi:80,
    Jayraj:100,
}
console.log(marks);

for (const key in marks) {
   console.log(`${key}  Marks : ${marks[key]}`);
   
}


// For of Loop in String:

let book='Mahabharat';

for (const a of book) {
    console.log(a);
    
}

let listArr=['Ram','Laxman','Bharat','Shatrughn'];

for (const r of listArr) {
    console.log(r);
}

// Array using FoeEach Loop.
listArr.forEach(function(index,element,array){
    console.log(index,element+1);
})
