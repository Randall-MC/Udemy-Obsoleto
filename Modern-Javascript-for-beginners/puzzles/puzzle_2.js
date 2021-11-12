"strict";
/* 
    --- Compound Interest ---
    Ask for the number of years, rate of interest, 
    principal amount from user with prompt 
*/

let amount = prompt('What is the principal amount?');
amount = parseInt(amount);
let years = prompt('What are the number of years?');
years = parseInt(years);
let interest = prompt('What is the rate of interest?');
interest = parseInt(interest) / 100;

compoundInterest(amount, years, interest);

function compoundInterest(amount, years, interest) {
    if (amount >= 0 && years > 0 && interest >= 0) {
        for (let i = 0; i < years; i++) {
            amount += (amount * interest);
        }
    } else {
        alert("You haven't given proper values");
        return;
    }
    return amount.toFixed(2);
}

let title = document.getElementById('h1');
h2.innerHTML = compoundInterest(amount, years, interest);