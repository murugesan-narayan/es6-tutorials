"use strict";
//map can be initialized with array as well
var mapTwo = new Map([
    ["fname", "Variyar"],
    ["lname", "Swamigal"],
]);
console.log(mapTwo);
console.log('Keys....');
for (var _i = 0, _a = mapTwo.keys(); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log(key);
}
console.log('Values....');
for (var _b = 0, _c = mapTwo.values(); _b < _c.length; _b++) {
    var value = _c[_b];
    console.log(value);
}
console.log('Entries....');
for (var _d = 0, _e = mapTwo.entries(); _d < _e.length; _d++) {
    var entry = _e[_d];
    console.log(entry[0], '=>', entry[1]);
}
//# sourceMappingURL=map_iteration.js.map