let isPrime = new Promise((num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) {
            setTimeout(() => "false", 1000);
        }
    setTimeout(() => num > 1, 1000);
});

console.log('start');
isPrim(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');
// console.log("start");
// console.log(isPrime(7));
// console.log("end");
// let isPrime = new Promise(
//     (resolve, reject, num) => {
//         for (let i = 2, s = Math.sqrt(num); i <= s; i++)
//             if (num % i === 0) { setTimeout(() => reject(false), 1000); }
//         setTimeout(() => resolve(true), 1000);
//     }
// // );
// isPrime(num)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
//     .finally(() => console.log("Promise ready!"));


// const isPrime = function (num) {
//     isPrim(num)
//         .then(console.log())
//         .then(rolesInfo => dataBase.logAccess(rolesInfo))
//         .then(finalResult => {
//             //do whatever the 'callback' would do
//         })
//         .catch((err) => {
//             //do whatever the error handler needs
//         });
// };

