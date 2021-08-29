"use strict";
var getValue = function () {
    return 5;
};
console.log('Normal function: ', getValue());
var getArrowValue = function () {
    return 5;
};
console.log('Arrow function: ', getArrowValue());
console.log('Type of getArrowValue: ', typeof getArrowValue);
var getArrowValue1 = function () { return 5; };
console.log('Arrow function with single statement: ', getArrowValue1());
var getArrowValue2 = function (n) { return n * 5; };
console.log('Arrow function with single argument: ', getArrowValue2(5));
var getArrowValue3 = function (m, a) { return m * 5 + a; };
console.log('Arrow function with multiple argument: ', getArrowValue3(5, 3));
//# sourceMappingURL=arrow_func.js.map