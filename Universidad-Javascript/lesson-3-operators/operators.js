
let a = 4, b = 2, z;

// Arithmetic operators
z = a + b;
console.log(z);

z = a - b;
console.log(z);

z = a * b;
console.log(z);

z = a / b;
console.log(z);

z = a % b;
console.log(z);

z = a ** b;
console.log(z);

// Increment and Decrement operators
let increment = 6, decrement = 8, result;

// Pre increment
result = ++increment; // current value of increment 6
console.log(increment);
console.log(result);

// Post increment
result = increment++; // current value of increment 7
console.log(increment);
console.log(result);

// Pre decrement
result = --decrement; // current value of decrement 8
console.log(decrement);
console.log(result);

// Post decrement
result = decrement--; // current value of decrement 7
console.log(decrement);
console.log(result);

// Assignment operators
let y = 1;

y += 53; // y = y + 53
console.log(y);

y -= 12; // y = y - 12
console.log(y);

y *= 2; // y = y * 2
console.log(y);

y /= 2; // y = Y / 2
console.log(y);

/* Also can be use

    %=
    **=

*/

// Comparison operators
a = 5, b = '5';
let c = 8, d = '8';

// Equal
z = a == b;
console.log(z);

// Strict equal
z = a === b;
console.log(z);

// Not equal
z = c != d;
console.log(z);

// Strict not equal
z = c !== d;
console.log(z);

a = 3, b = 2, c = '3';
// Less than
z = b < a;
console.log(z);

// Less than or equal
z = a <= c;
console.log(z);

// Greater than
z = a > b;
console.log(z);

// Greater than or equal
z = a >= c;
console.log(z);
