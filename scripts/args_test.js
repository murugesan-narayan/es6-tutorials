"use strict";
/**
 * Arguments lengths represents passed paramenters.
 * Variable args ('...colors') parameter: each passed values are consided as separate argument.
 * But '...' parameter holds all its values into one single array.
 * @param message
 * @param colors
 */
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
var messageA = 'List of Colors:';
displayColors(messageA, 'RED'); //args.len = 2
displayColors(messageA, 'GREEN', 'BLUE'); //args.len = 3
displayColors(messageA, 'GREEN', 'BLUE', 'YELLOW'); //args.len = 4
//# sourceMappingURL=args_test.js.map