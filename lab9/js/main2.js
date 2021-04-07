"use strict";
var person = {
    name: "",
    dataOfBirth: null,
    getName: function() {
        return this.name;
    },
    setName: function(name) {
        this.name = name;
    },
    setDate: function(Date) {
        this.dataOfBirth = Date
    },

};
var john = Object.create(person);
john.setName("John");
john.dataOfBirth = new Date("1998-12-10");
console.log(`The person’s name is ${john.getName()}`);
// console.log(getDatee());
console.log(`John was born on ${john.dataOfBirth.toISOString().substring(0,10)}`);

var Employee = Object.create(person);
Employee.Salary = "0";
Employee.hireDate = Date.now;
Employee.dojob = function(jobtitle) {
    return `${this.getName()} is a ${jobtitle} who earns ${this.Salary}`;
}
var Anna = Object.create(Employee);
Anna.setName("Anna");
Anna.Salary = "$249,995.50 ";
console.log(Anna.dojob("Programmer"));

function Person(name, dateOfBirth) {
    this.name = name;

    this.dateOfBirth = dateOfBirth;
    dateOfBirth = new Date();
    this.toString = function() {
        return `Name:${this.name},DateOfBirth:${new Intl.DateTimeFormat().format(this.dateOfBirth)}`;
    }


}

var Peter = new Person("Peter", new Date("1985-10-10"));

console.log(Peter.toString());