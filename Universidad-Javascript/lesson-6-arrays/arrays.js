// Old form to create an array 
// let fruits = new Array("Apple", "Peach", "Orange", "Lemon", "Grapes", "Melon");

// Create an array
const fruits = ["Apple", "Peach", "Orange", "Lemon", "Grapes", "Melon"];

// Access an Array item using the position index
console.log( fruits[3] );
console.log( fruits[5] );

// Change an Array item value using the position index
fruits[5] = "Watermelon"
// console.log( fruits[5] );

// Add an item to the end of an array
fruits.push('Melon');

// Add an item to the end of an array using property length
fruits[fruits.length] = 'Banana';

// Is an array
console.log( typeof fruits );
console.log( Array.isArray(fruits) );
console.log( fruits instanceof Array ); 

// Loop over an Array
for(let i = 0; i < fruits.length; i++) {
    console.log(`fruit ${i} is ${fruits[i]}`);
}