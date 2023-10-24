a=['a', 'b', 'c', 'd', 'e', 'f'];

// console.log(a);

for (let i = 0; i < a.length; i++) {
    // console.log(a[i]);
}

a.forEach(element => {
    // console.log(element);
});


  let b="Harpal";

  for (const i in b) {
        const element = b[i];
        // console.log(element);
  }

  Array.from(b).forEach(element =>{
    console.log(element);
  })
