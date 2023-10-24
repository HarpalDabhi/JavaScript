console.log('welcome to in the adjacent course');

let aside=document.getElementById('aside')
console.log(aside);

let BeforeBegin=aside.insertAdjacentHTML('beforebegin',"<p>BeforeBegin</p>")

let AfterBegin=aside.insertAdjacentHTML('afterbegin','<p>AfterBegin</p>')

let BeforeEnd=aside.insertAdjacentHTML('beforeend','<p>BeforeEnd</p>')

let AfterEnd=aside.insertAdjacentHTML('afterend','<p>AfterEnd</p>')



// let aside2=aside.insertAdjacentHTML('beforebegin',`<u>You are My crush Gopi</u>`)
// let aside3=aside.insertAdjacentHTML('afterbegin','<h1>Now Your are my love Gopi.</h1>')

// let aside4=aside.insertAdjacentHTML('beforeend',"<button>Now You are My Heart</button>")

// let aside5=aside.insertAdjacentHTML('afterend',"<marquee>Now Your are my wife</marquee>")
