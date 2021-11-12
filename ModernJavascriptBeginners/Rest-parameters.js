'use strict';
function sum(...array) {
    let sum = 0;
    for (let i of array) {
        sum += i;
        console.log('I values:', i);
        console.log('Sum of values:', sum);
    }

    return sum;
}

console.log(sum(5, 10, 43, 98, 73));