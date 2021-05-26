const promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        for (let i = 2, s = Math.sqrt(this.num); i <= s; i++) {
            if (this.num % i === 0) {
                reject({ prime: false });
            }
        }
        resolve({ prime: this.num > 1 });
    }, 500);
});
function isPrime(num) {
    return promise;
}

async function isPrimeAsync(num) {
    let result = await isPrime(num);
    console.log(result);
}

console.log('start');
isPrimeAsync(7);
console.log('end');