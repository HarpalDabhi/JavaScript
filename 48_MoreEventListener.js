let btn=document.getElementById("btn");
console.log(btn);

// let ask=prompt("Enter Number");

let a=function func1(e) {
    // alert("Hello 1");
    console.log(e)
    console.log(e.clientX)
}

let b=function func1() {
    alert("Hello 2");
}

btn.addEventListener("click", a)

btn.addEventListener('contextmenu',b)

// if (ask=='2') {
//     btn.removeEventListener('click', a);
// }

let body=document.body;

body.addEventListener('click',func3)
let color;
function func3(e) {
    // color = `rbg(${e.clientX},${e.clientY},${e.offsetX})`
    // console.log(color)
    // body.style.backgroundColor = color;
    // console.log(e);
    console.log("Client X :"+e.clientX);
    console.log("Client Y :"+e.clientY);
    console.log("Offset X :"+e.offsetX);
    console.log("Offset Y :"+e.offsetY);
    setInterval(() => {
        console.clear();
    }, 3000);
    // console.log(e.message);
}