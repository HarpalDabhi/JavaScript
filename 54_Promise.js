let promise = new Promise(function(resolve, reject) {
    console.warn("Hello world!");
    resolve(56)
    // reject(56)
})

console.log("Hello world!")

setTimeout(() => {
    console.log("Timeout!");
}, 3000);

console.log(promise);