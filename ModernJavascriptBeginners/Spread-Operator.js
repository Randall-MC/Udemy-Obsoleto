'use strict';
let numbers = [45, 65, 36, 12, 82];
let total = 0;

function sum() {
    console.log('Total of arguments:', arguments.length);
    for (let i = 0; i < arguments.length; i++) {
        console.log(`Variable arguments[${i}] = ${arguments[i]}` );
        total+= arguments[i];
        console.log('Total =', total);
    }
}

sum(...numbers);