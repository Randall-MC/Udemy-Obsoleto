const human = {
    _firstName: "Vicente",
    _lastName: "Fernández",
    _language: "es",
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    },
    get language() {
        return this._language.toUpperCase();
    },
    set language( _language ) {
        this._language = _language;
    }
}

// console.log( human.fullName );
console.log( human._language );
console.log( human.language );
human.language = "us";
console.log( human._language );
console.log( human.language );