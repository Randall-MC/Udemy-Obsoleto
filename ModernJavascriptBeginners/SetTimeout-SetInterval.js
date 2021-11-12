'use strict';
// console.log('Started');
let count = 0;
// let startCount = setInterval(()=> {
//     console.log(++count)
// }, 2000);

// setTimeout(()=> {
//     clearInterval(startCount);
//     console.log('Finished');
// }, 10001);

let startCount = setInterval(()=> console.log(++count), 2000);
console.log('Start');
setTimeout(()=> {
    clearInterval(startCount);
    console.log('Finish');
}, 10100);