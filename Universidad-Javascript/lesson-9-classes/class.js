class Superhero{
    constructor( firstName, lastName, age ) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    get name() {
        return `${this._firstName} ${this._lastName}`;
    }

    set name( firstName ) {
        this._firstName = firstName;
    }
}

let Batman = new Superhero("Bruce", "Wayne", 36);
console.log( Batman.name );

let Superman = new Superhero("Clark", "Kent", 42);
// Superman.name = "Roberto"
// console.log( Superman.name );