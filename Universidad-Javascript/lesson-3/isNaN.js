let ageString = "18das", votingAge = 18, ageNumber;

ageNumber = Number(ageString);
console.log(ageNumber);

if ( isNaN(ageNumber) ) {
    console.log("Can't proceed, is not a number");
}else {
    ageNumber >= votingAge ? console.log("Grown-up, can vote") : console.log("Too young, can't vote");
}
