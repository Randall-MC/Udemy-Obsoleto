"strict";
/* 
    Alternate small and capital letters
        * First letter is always capital and even numbers
        * Odd numbers are small letters
*/

function alternateCaps(string) {
    // Split the string into an array
    let wordArray = string.split(' '); // Every word becomes an array item

    for (let i = 0; i < wordArray.length; i++) {
        // Convert every word in an array
        let letterArray = wordArray[i].split('');
        // Go through that particular word
        for (let j = 0; j < letterArray.length; j++) {
            if (j % 2 === 0) { // even number
                letterArray[j] = letterArray[j].toUpperCase();
            } else { // odd number
                letterArray[j] = letterArray[j].toLowerCase();
            }
        }
        // Putting back the letters together
        wordArray[i] = letterArray.join('');
    }
    // Joining back the words
    return wordArray.join(' ');
}

let title = document.getElementById('h1');
h1.innerHTML = alternateCaps('This is an example string');