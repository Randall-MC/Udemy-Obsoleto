function Person( firstName, lastName, age ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

Person.prototype.superhero = true;

const Batman = new Person( "Bruce", "Wayne", 42 );
console.log( Batman.superhero );

const Superman = new Person( "Clark", "Kent", 47);
console.log( Superman.superhero );