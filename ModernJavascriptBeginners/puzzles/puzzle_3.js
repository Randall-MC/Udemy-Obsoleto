"strict";
/* 
    --- Numbers in expanded form ---
    12 -> 10 + 2
    70304 -> 70000 + 300 + 4
*/

let title = document.getElementById('h1');

function expandedForm(number) {
    h1.innerHTML = number;
    // 109 -> "109" -> "1", "0", "9" -> "9", "0", "1" -> "901"
    number = number.toString().split('').reverse().join('');
    let arr = []; // to store the expanded numbers
    let string = ''; // The final expanded numbers

    for (let i = 0; i < number.length; i++) {
        let temp = parseInt(number.charAt(i)) * Math.pow(10, i);
        if (temp != 0) {
            arr.push(temp);
        }
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        if (i == 0) {
            return string.concat(arr[i]);
        }
        string = string.concat(arr[i], " ", "+", " ");
    }
}

let subtitle = document.getElementById('h2'); 
h2.innerHTML = expandedForm(70064801);