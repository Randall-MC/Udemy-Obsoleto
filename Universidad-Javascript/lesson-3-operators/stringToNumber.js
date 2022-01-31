let ageString = "14", votingAge = 18, ageNumber;

console.log(typeof ageString);
ageNumber = Number(ageString);
console.log(typeof ageNumber);

ageNumber >= votingAge ? console.log("Grown-up, can vote") : console.log("Too young, can't vote");