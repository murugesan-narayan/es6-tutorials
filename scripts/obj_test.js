"use strict";
var _a;
var firstName = 'Swami';
var lastName = 'Vivekanandar';
//we refer outside variables inside object 
var person = {
    firstName: firstName,
    lastName: lastName
};
console.log('First Name', person.firstName);
console.log('Last Name', person.lastName);
// we can also omit the assignment if obj variable is same as refered variable
person = {
    firstName: firstName,
    lastName: lastName
};
console.log('First Name', person.firstName);
console.log('Last Name', person.lastName);
var personFunc = function (firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        //normal function declaration inside obj
        isSenior: function () {
            return age > 60;
        },
        //shortcut function declaration inside obj
        //ommited function keyword and semicolon.
        isMidSenior: function () {
            return age < 60 && age > 40;
        }
    };
};
person = personFunc(firstName, lastName, 67);
console.log('First Name', person.firstName);
console.log('Last Name', person.lastName);
console.log('Person is Senior Citizen', person.isSenior());
console.log('Person is Mid Senior Citizen', person.isMidSenior());
var lname = 'last name';
var age = 'age';
person = (_a = {
        //properties can have space, but they have to be accessed with map syntax
        'first name': firstName
    },
    //properties can refer any other variable for its name
    _a[lname] = lastName,
    _a[age] = 12,
    _a);
console.log(person['first name']);
console.log(person[lname]);
console.log(person.age);
//# sourceMappingURL=obj_test.js.map