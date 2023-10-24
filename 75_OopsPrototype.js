let a={
    name:'Harpal',
    education: 'B.Tech',
    run:()=>{
        // alert('self running');
    }
}
console.log(a)

let p={
    run:()=>{
        // alert('Running');
        console.log('running');
    }
}

a.__proto__=p;

let x=p.__proto__={
    nickname: 'GitaNandan',
}

x.__proto__={
    antim:'Actions'
}

a.run();

console.log(a.nickname);

console.log(a.antim);