"use strict";
var _a;
var sy1 = Symbol();
console.log(typeof sy1);
var sy2 = Symbol('Test');
console.log(sy2.toString());
var sy3 = Symbol('Test');
var sy5 = Symbol('Test');
//symbols always gets unique id
console.log(sy3 === sy5); //false
//if you do not want to create unique id
//use it with for method.
//this registers symbol and refers the same
//if already defined. uses description as key.
var sy6 = Symbol.for('Name');
var sy7 = Symbol.for('Name');
console.log(sy6 === sy7); //true
console.log(Symbol.keyFor(sy7));
var pers = (_a = {},
    _a[sy6] = 'Swami',
    _a.age = 23,
    _a);
console.log(Object.getOwnPropertyNames(pers)); // returns age
console.log(Object.getOwnPropertySymbols(pers)); // returns sy6 symbol
//# sourceMappingURL=symbol_test.js.map