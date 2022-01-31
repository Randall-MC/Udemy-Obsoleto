const personOne = {
    firstName: "Luis",
    lastName: "Perez",
    fullName: function( degree, age) {
        return `${degree} : ${this.firstName} ${this.lastName} ${age}`;
    }
}

const personTwo = {
    firstName: "Maria",
    lastName: "Dolores"
}

console.log( personOne.fullName("Eng.", 56) );
console.log( personOne.fullName.call(personTwo, "Eng.", 32) );