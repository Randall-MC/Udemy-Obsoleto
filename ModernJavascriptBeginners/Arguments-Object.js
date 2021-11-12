'use strict';
// Similar a un array, accesible dentro de las funciones, contiene los valores pasados a esa función
function printArguments(one, two, three) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

printArguments(1, 2, 3);

const sum = function() {
    let total = 0;
    console.log(arguments.length);
    for(i = 0; i < arguments.length; i++) {
        total+= arguments[i];
        // console.log(total);
    }
    console.log(total);
}

sum(20, 58, 76, 64, 15);