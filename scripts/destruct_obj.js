"use strict";
var perObj = {
    firstName: 'Swami',
    lastName: 'Vivekanandar',
    age: 35
};
// we use curly braces for obj destructuring
// we can use colon for alias name
// we can also use default value.
var firstName = perObj.firstName, ln = perObj.lastName, age = perObj.age, _a = perObj.gender, gender = _a === void 0 ? 'Male' : _a;
console.log(firstName, ln, age, gender);
//# sourceMappingURL=destruct_obj.js.map