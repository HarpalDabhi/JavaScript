console.log('Welcome in the Class List and Name');

let one=document.getElementById('one')
console.log(one);

one.className='red center u font'
console.log(one);

console.table(typeof(one.classList));

one.classList.remove('red')

one.classList.add('green')

one.classList.toggle('green') //True or False





