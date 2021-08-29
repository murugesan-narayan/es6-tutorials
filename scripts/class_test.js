"use strict";
//function can be called before declaration.
//prints Hello...
hello();
function hello() {
    console.log('Hello...');
}
//We can not use before declartion gives error, 
//but in function you can do that.
//let p1 = new Person();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
        console.log('Hello Person..');
    };
    return Person;
}());
var p = new Person();
//prints function.
//classes are special type of functions.
console.log(typeof Person);
//this returns true
console.log(p.greet === Person.prototype.greet);
//# sourceMappingURL=class_test.js.map