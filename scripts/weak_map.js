"use strict";
//non refrenced keys will get removed from weakmap
var myWeakMap = new WeakMap();
var obj_w1 = {};
myWeakMap.set(obj_w1, 'Hello world');
console.log(myWeakMap);
obj_w1 = null;
console.log(myWeakMap);
//# sourceMappingURL=weak_map.js.map