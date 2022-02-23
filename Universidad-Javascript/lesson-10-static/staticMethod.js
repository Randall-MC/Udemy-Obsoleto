class Person{
    static countPersons = 0;
    static get MAX_Persons(){ return 3 }

    constructor( firstName, lastName ) {
        this._firstName = firstName;
        this._lastName = lastName;
        if( Person.countPersons < Person.MAX_Persons ){
            this._id = ++Person.countPersons;
        } else{
            console.log("Person limit has been exceeded");
        }
    }

    static greet( person ) {
        return console.log(`${person.fullName()} says Hi!`);
    }

    get id(){ return this._id }
    set id( id ){ this._id = id }

    get name(){ return this._firstName; }
    set name( firstName ){ this._firstName = firstName; }

    get lastName(){ return this._lastName; }
    set lastName( lastName ){ this._lastName = lastName; }

    fullName() {
        return `${this._id}: ${this._firstName} ${this._lastName}`;
    }
    // Overwriting the method of the class Object ( All objects in JS descend from Object, all objects inherit methods and properties from Object.prototype )
    toString() {
        // Applies polymorphism (multiple forms at runtime)
        // The run method depend if is a class or subclass
        return this.fullName();
    }
}

// Sub
class Employee extends Person {
    constructor( firstName, lastName, department ) {
        super( firstName, lastName ); // Call the class Person
        this._department = department;
    }

    get department() {
        return this._department;
    }
    set department( department ) {
        this._department = department;
    }

    fullName() {
        return super.fullName() + ", " + this._department;
    }
}

let Luis = new Person("Luis", "Miguel");
// console.log( Luis );
let Maria = new Employee("Maria", "Perez", "Sales");
// console.log(Maria.fullName());
let Jose = new Person("Jose", "Ramirez")

// static method
Person.greet( Maria );
// static property
// console.log( Person.countPersons );
let Jenifer = new Employee("Jenifer", "Aguilar", "Chief");