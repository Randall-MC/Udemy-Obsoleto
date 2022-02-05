class Superhero{
    constructor( firstName, lastName ) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get name() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set name( str ) {
        this._firstName = str;
    }
    
    set lastName( str ) {
        this._lastName = str;
    }

    fullName() {
        return this._firstName + " " + this._lastName;
    }

    // Overwriting the method of the class Object ( All objects in JS descend from Object, all objects inherit methods and properties from Object.prototype )
    toString() {
        // Applies polymorphism (multiple forms at runtime)
        // The method run depend if is a class or subclass
        return this.fullName();
    }
}

// Sub
class Gender extends Superhero {
    constructor( firstName, lastName, gender ) {
        super( firstName, lastName ); // Call the class Superhero
        this._gender = gender;
    }

    get gender() {
        return this._gender;
    }

    set gender( str ) {
        this._gender = str;
    }

    fullName() {
        return super.fullName() + ", " + this.gender;
    }
}

let Batman = new Superhero("Bruce", "Wayne");
// console.log( Batman );

let Superman = new Superhero("Klark", "Kent");
console.log( Superman.name = "Clark" );

let Hulk = new Gender("Bruce", "Banner", "Male");
// console.log( Hulk );

console.log(Hulk.fullName());
console.log(Batman.fullName());