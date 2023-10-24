console.log('Welcome to Understand Loop in aray :');

let browsers=['FireFox','Google Chrome','Internet Explorer','Microsoft Edge','Brave','Safari','UC Browser','Oracle','Opera','Samsung MyGalaxy'];

// For Loop in Array.
let element="";
for (let i = 0; i < browsers.length; i++) {
     element +=i+1+"."+ browsers[i]+"\n";   
}
console.log(element);

// For in Loop in Array.

for (const key in browsers) {
        const element = browsers[key];
        console.log(parseInt(key)+1,element);
}

// For Each Loop In Array.
let i=1
browsers.forEach(element => { 
    console.log(i,element);
    i++   
});

// for of loop

for (const browser of browsers) {
    console.log("🦁 : ",browser);
    
}

let name='Google Search'

let a=Array.from(name)
console.log(a);



