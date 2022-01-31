// Primitive data type

/*
    Is data that is not a object and has no methods.
    There are 7 primitive data types:
     - string
     - number
     - bigint
     - boolean
     - undefined
     - symbol
     - null
    
    All primitives are inmutable, they cannot be altered
*/
// get by value
let primitive = 10;

const testFunction = ( primitive ) => primitive = 20;

console.log( primitive );

// get by reference
const human = {
    name: "Luis",
    lastName: "Miguel"
}

console.log( human );

function renameHuman( human ) {
    human.name = "Jenny";
    human.lastName = "Rivera";
}

renameHuman( human );
console.log( human );