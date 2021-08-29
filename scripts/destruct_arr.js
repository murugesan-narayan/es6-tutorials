"use strict";
var employee = ['Swami', 'Vivekanandar', 'Male'];
//each array element is mapped corresponding to the left handside variables 
var firstName = employee[0], lastName = employee[1], gender = employee[2], age = employee[3], _a = employee[4], citizen = _a === void 0 ? 'Indian' : _a;
//Age returns undefined as we have only three array elements
// and citizen returns defualt value.
console.log('Destructured: ', firstName, lastName, gender, age, citizen);
var _b = ['fN', 'lN', 25], age1 = _b[2];
//only age is destructured  first two elements are skipped.
console.log('age', age1);
var _c = ['Swami', 35, 25, 75, 55], name1 = _c[0], marks = _c.slice(1);
//only age is destructured  first two elements are skipped.
console.log('name', name1, 'marks', marks);
//# sourceMappingURL=destruct_arr.js.map