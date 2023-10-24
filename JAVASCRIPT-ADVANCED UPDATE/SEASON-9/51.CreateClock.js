let digit=document.getElementById('digital');

let deh=document.querySelector('.container')
console.log(deh);


setInterval(() => {
    let date=new Date()
// console.log(date);

let hours=date.getHours()
// console.log(hours);

let minute=date.getMinutes()
// console.log(minute);

let second=date.getSeconds()
// console.log(second);

    let a=(`${hours} : ${minute} : ${second}`);
    digit.innerHTML=`<b>${a}</b>`
    if (hours==22 && minute==38 && second==10) {
        digit.style.backgroundColor='black';
    }
}, 1000);


function day(e)
{
    console.log('i am this');

 digit.style.backgroundColor='#ebf702';

 digit.style.boxShadow='5px 5px 70px 5px #f4fc53'
 
digit.style.color='#282916'   

}

    




