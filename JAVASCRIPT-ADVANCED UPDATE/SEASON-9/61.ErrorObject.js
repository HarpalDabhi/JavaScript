console.log('I am error object video');

try {
    let age=prompt('Enter Your Age')
    if (age>150){
    throw new Error('Gopi is not good')   
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
