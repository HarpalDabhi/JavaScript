
//1. Log
console.log('This is Console log');

//2. Assert
console.assert(50>90)

//3. Error
console.error('I am an Error')

//4. Info
console.info('I am info')

//5. Table

let obj={
    Harpal:'Purvi',
    Kinjal:'love',
    Purvi:'sister'
}
console.table(obj)

//6. clear
// console.clear()

//7. 
console.debug('Debug')

//8. Time Start
console.time('a')
let sum=0
for (let i = 1; i < 100; i++) {
    sum+=i;
}
console.log(sum);
console.timeEnd('a')

//9. Warn

console.warn('hi')


