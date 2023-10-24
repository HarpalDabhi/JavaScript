console.log("Starting..");

let ptag=document.getElementById('ptag');
console.log(ptag);

console.log(ptag.insertAdjacentHTML('beforebegin',"<big>Before Begin</big>"));

console.log(ptag.insertAdjacentHTML('afterbegin',"<big>After Begin</big>"));

console.log(ptag.insertAdjacentHTML('beforeend',"<big>Before End</big>"));

console.log(ptag.insertAdjacentHTML('afterend',"<big>After End</big>"));