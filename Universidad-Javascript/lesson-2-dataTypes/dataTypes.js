let variable;

// String
variable = "This is a string";
console.log(typeof variable);

// Number
variable = 485;
console.log(typeof variable);

// Object
variable = {
    typeString: "Chain of characters",
    typeNumber: 123,
}
console.log(typeof variable);

// Boolean
variable = true;
console.log(typeof variable);

variable = false;
console.log(typeof variable);

// Function
function functionName(){
    console.log("Body of function");
    console.log(20 * 5);
}
console.log(typeof functionName);

// Symbol
variable = Symbol("Now is a Symbol type")
console.log(typeof variable);

// Class
class className{
    constructor( name, age ){
        this.name = name;
        this.age = age;
    }
}
console.log(typeof className);

// Undefined
let newVariable;
console.log(typeof newVariable);

// null
newVariable = null;
console.log(typeof newVariable);

// Array
variable = [
    "Can contain strings",
    45654,
    {
        demo: "Also numbers and objects", 
    }
]
console.log(typeof variable);

// Empty strings
variable = "";
console.log(variable);
console.log(typeof variable);