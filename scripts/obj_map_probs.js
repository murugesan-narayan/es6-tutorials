"use strict";
//This is code explains about es5 obj or map probelems
//that we will face in case if it is not properly coded or documented.
//we have to be clear on what we are checking
//whether we are expcting some values or some non zero or non false
var myObj = Object.create(null);
myObj.id = true;
if (myObj.id) {
    console.log('Boolean:true', 'id exists');
}
myObj.id = 1;
if (myObj.id) {
    console.log('Number:1', 'id exists');
}
myObj.id = 0;
if (!myObj.id) {
    console.log('Number:0', 'id doe not exists');
}
//map keys are alwasys converted to its string value
//so we need to be careful on that.
var myMap = Object.create(null);
myMap.name = 'Swami';
var name_mm = myMap.name;
console.log(name_mm);
//1, '1' both refers the same key
myMap[1] = 'One';
console.log(myMap[1]);
console.log(myMap['1']);
var obj12 = { fname: 'f1' };
var obj22 = { fname: 'f2' };
myMap[obj12] = 'Obj-12';
myMap[obj22] = 'Obj-22';
//both returns 'Obj-22'
//because obj12, obj22 both has same toString() value.  [object Object]
//so the second assignment replaced the old one.
//it maintains only one key.
console.log(obj12, obj12.toString(), myMap[obj12]);
console.log(obj22, obj22.toString(), myMap[obj22]);
//# sourceMappingURL=obj_map_probs.js.map