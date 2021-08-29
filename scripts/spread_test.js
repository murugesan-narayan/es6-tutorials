"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log('Args Length: ', arguments.length);
    console.log(message);
    console.log(colors);
    for (var i_1 in colors) {
        console.log(colors[i_1]);
    }
};
var messageB = 'List of Colors:';
var colors = ['GREEN', 'BLUE', 'YELLOW'];
//here we use spread oprator to spread the array elements 
//as parameters to the function
displayColors.apply(void 0, __spreadArray([messageB], colors)); //args.len = 4
//# sourceMappingURL=spread_test.js.map