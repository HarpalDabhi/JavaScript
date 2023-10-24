console.log("Welcome to Learn Strings and It's Method");

let name='Kinjal Dharajiya is My cousin Sister.';
console.log(name);

const dblquote="Mer Purvi is also My cousin but he is very hearted with Me and she always My best sister";
console.log(dblquote);

const backticks=`My brother's Name is Vishal and My sister's name is Puriv . she also known as "Shegha".`;
console.log(backticks);

const obj={
    Krishna:'Kans',
    Bheem:'Duryodhan',
    Arjun:'Karna',
    Sahdev:'Shakuni',
    Udhisthir:'Shalya'
}

for (const c in obj) {
  console.log(`${obj[c]} Was Killed By ${c}  in Mahabharat`);
}

const love='Krishna was Rahda\'s Love';
console.log(love);

const love2='Krishna was Rahda \t  s Love'
console.log(love2);

const love3='Krishna was Rahda \r  s Love'
console.log(love3);

console.log(love3.length);

console.log(love3[0]+" Love "+love3[12]);