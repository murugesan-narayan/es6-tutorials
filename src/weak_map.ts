//non refrenced keys will get removed from weakmap
let myWeakMap = new WeakMap()
let obj_w1 = {}
myWeakMap.set(obj_w1, 'Hello world')
console.log(myWeakMap)

obj_w1 = null

console.log(myWeakMap)