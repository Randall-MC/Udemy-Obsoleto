// Create an object
const human = {
    name: "Vicente",
    lastName: "Fernández",
    age: 45,
    fullName: function() {
        return `${this.name} ${this.lastName}`;
    }
}

// Access to elements of an object
// console.log( human.name );
console.log( human.age );
console.log( human.fullName() );
// console.log( human );

// Create an object using the new Object keyword
const alien = new Object();
alien.id = 927743;
alien.hostile = false;
alien.chargeEnergy = function() {
    return "Recharging";
}

// Other way to access elements of an object
console.log( alien["hostile"] );
// console.log( alien["chargeEnergy"] ); // I don't know how to use in functions

// for in
for( propertiesOrMethods in human ) {
    console.log( propertiesOrMethods );
    console.log( human[propertiesOrMethods] );
}

// Adding properties to objects
human.height = 1.72;
human["weight"] = 68;

console.log( human );

// removing properties from objects
delete alien.hostile;
delete alien["chargeEnergy"];

console.log( alien );