"use strict";
/**
 * This will result in printing index value as 5
 * in all the iteration, because var is function scope,
 * when the its value changes refelects in all the references
 * used by closures.
 */
for (var index = 0; index < 5; index++) {
    setTimeout(function () { return console.log(index); }, 1000);
}
var _loop_1 = function (index_1) {
    setTimeout(function () { return console.log(index_1); }, 1000);
};
/**
 * Here let is local scope, so closure gets own copy of value for its reference
 */
for (var index_1 = 0; index_1 < 6; index_1++) {
    _loop_1(index_1);
}
//# sourceMappingURL=let2_test.js.map