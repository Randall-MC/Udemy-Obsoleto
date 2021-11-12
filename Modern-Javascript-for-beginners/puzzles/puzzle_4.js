"strict";
/* 
    Is string a Palindrome
*/

// Using predefined function - for reverse

let title = document.getElementById('h1');
let subtitle = document.getElementById('h2');

// function checkPalindrome(string) {
//     let reverse = string.split('').reverse().join('');
//     if (reverse === string) {
//         return true;
//     }
//     return false;
// }

// Using algorithm - for reverse
function checkPalindrome(string) {
    let reverse = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string.charAt(i);
    }

    if (reverse === string) {
        h2.innerHTML = `${string} = ${reverse}`;
        return true;
    } else {
        h2.innerHTML = `${string} != ${reverse}`;
        return false;
    }
}

h1.innerHTML = checkPalindrome('kasjd');