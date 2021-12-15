'use strict';

const num = [1,2,3];
num.map(v => v * 2);
console.log(num);
console.log(num.map(v => v * 2));

// constructor
const Person = function (name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
};

const lubna = new Person('Lubna', 2001);
console.log(lubna);
// console.log(lubna instanceof Person);

// prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
};

lubna.calcAge();
console.log(lubna.__proto__);
console.log(lubna.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(lubna));
console.log(Person.prototype.isPrototypeOf(Person));

// PrototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(lubna.species);

console.log(lubna.hasOwnProperty('name'));
console.log(lubna.hasOwnProperty('species'));

// static methods
console.log(Number.parseFloat(12));