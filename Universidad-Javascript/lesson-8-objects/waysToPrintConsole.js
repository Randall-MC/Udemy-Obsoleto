const human = {
    name: "Pancho",
    lastName: "Pantera",
    age: 39
}

// Concatenate all values
console.log( `${human.name} ${human.lastName} ${human.age}` );

// Using For in loop
for (const properties in human) {
    console.log( `${properties}: ${human[properties]}` );
}

// Using the "values" method
let humanArray = Object.values( human );
console.log( humanArray );

// Using JSON
let humanStringify = JSON.stringify( human );
console.log( humanStringify );