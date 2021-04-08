"use strict";
export class person {

    constructor(name, dateOfBirth) {
        this.name = name;
        // dateOfBirth = new Date();
        this.dateOfBirth = dateOfBirth;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;

    }
    get dateOfBirth() {
        return this._dateOfBirth;
    }
    set dateOfBirth(d) {
        return this._dateOfBirth = d;
    }
    toString() {
        return `Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}`;

    }
}