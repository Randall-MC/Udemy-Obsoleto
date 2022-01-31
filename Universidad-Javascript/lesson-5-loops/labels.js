// It is prefixing a statement with an identifier which you can refer to
// Break statement
breakHere:
for(let count = 1; count < 5; count++) {
    if ( count % 2 == 0 ) {
        console.log(count);
        break breakHere;
    }
}
console.log("Break statement stop loop");

// Continue statement
continueHere:
for(let count = 1; count <= 10; count++){
    if ( count % 2 !== 0 ) {
        continue continueHere;// jumps to the update expression
    }
    console.log(count);
}