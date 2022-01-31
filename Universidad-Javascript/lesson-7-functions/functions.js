// Function declaration
function functionName(parameters) {
    return console.log(`This is a function ${parameters}`);
}

functionName("declaration");

// Function expression
const FunctionAnonymous = function(parameters) {
    return console.log(`This is a function ${ parameters }`);
}

FunctionAnonymous("expression");

// Self invoking function
(function( parameters ) {
    console.log(`This is a ${ parameters }`);
} ("self invoking"));

// Arrow function
const variableName = ( parameters ) => console.log( parameters );
variableName("This is an arrow function");

// Functions as objects
function propertiesDemo( parameterOne, parameterTwo, parameterThree ) {
    let ignore = `${parameterOne}, ${parameterTwo}, ${parameterThree}.`;
    return `${ignore} Total of parameters: ${arguments.length}`;
}

let methodsDemo = propertiesDemo.toString();

console.log( typeof functionName );
console.log( propertiesDemo("argument-1", "argument-2", "argument-3") );
console.log( methodsDemo );