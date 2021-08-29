"use strict";
var str = 'test';
var arr1 = [1, 2, 3];
var obj = {};
var num = 1;
//returns function if iterator found else undefined
console.log('For string', typeof str[Symbol.iterator]);
console.log('For arr', typeof arr1[Symbol.iterator]);
console.log('For obj', typeof obj[Symbol.iterator]);
console.log('For num', typeof num[Symbol.iterator]);
//# sourceMappingURL=symbol_itr.js.map