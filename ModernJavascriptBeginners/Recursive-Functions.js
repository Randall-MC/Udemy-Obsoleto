'use strict';
// const countdown = function(number) {
//     if(number === 0) {
//         return 0;   
//     }
//     console.log(number);
//     return countdown(number - 1);
// }

// countdown(5);

const factorial = function(number) {
    if(number === 1) {
        return 1;
    }
    console.log(number);
    return number * factorial(number - 1);
}

console.log(factorial(5));

// const fibonacci = function(number) {
//     if ((number == 0) || (number == 1)) {
//         return number;
//     } else {
//         console.log(number);
//         return fibonacci(number - 1) + fibonacci(number - 2);
//     }
// }

// console.log(fibonacci(5));

// function sum(number) {
//     if (number == 0) {
//         return number;
//     }
//     console.log(number);
//     return number + sum(number - 1);
// }

// console.log(sum(5));