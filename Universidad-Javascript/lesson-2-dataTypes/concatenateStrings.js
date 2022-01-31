// Concatenate strings using variables
let x = 'Peter', y = 'Parker';
let exampleOne = x + ' ' + y;
console.log(exampleOne);

// Concatenate strings using string character
let exampleTwo = 'Peter' + ' ' + 'Parker';
console.log(exampleTwo);

// When sums a string with a number, this converts number to string. "Context string"
let exampleThree = 'Hello' + 2 + 4;
console.log(exampleThree);

// But, if you enclose number in parentheses or write numbers before strings, then first done the sum of numbers
let exampleFour = 'Hello' + (2 + 4);
let exampleFive = 2 + 4 + 'Hello';
console.log( exampleFour );
console.log( exampleFive );
