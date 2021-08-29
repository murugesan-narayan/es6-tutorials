"use strict";
var colors = ['Green', 'Blue', 'Yellow'];
//for in statement
console.log('for in statement');
for (var iterator in colors) {
    console.log(colors[iterator]);
}
//for of statement
console.log('for of statement');
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var color = colors_1[_i];
    console.log(color);
}
//for of statement, prints A, B, C
console.log('for of statement with string chars');
for (var _a = 0, _b = 'ABC'; _a < _b.length; _a++) {
    var letter = _b[_a];
    console.log(letter);
}
//# sourceMappingURL=for_loop.js.map