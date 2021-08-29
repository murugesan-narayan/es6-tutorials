"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var set11 = new Set();
var a1 = 5;
set11.add(a1);
a1 = null;
//still holds 5 in set
console.log(set11);
//we can get it back like below
var a12 = __spreadArray([], set11)[0];
console.log(a12);
//in week set, null references are removed.
var set12 = new WeakSet();
var a13 = {};
set12.add(a13);
//now it will remove a13 when grabage happens
a13 = null;
console.log(set12);
//# sourceMappingURL=week_set.js.map