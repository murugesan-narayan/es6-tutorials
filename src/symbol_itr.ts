let str = 'test'
let arr1 = [1,2,3]
let obj = {}
let num = 1
//returns function if iterator found else undefined
console.log('For string', typeof str[Symbol.iterator])
console.log('For arr', typeof arr1[Symbol.iterator])
console.log('For obj', typeof obj[Symbol.iterator])
console.log('For num', typeof num[Symbol.iterator])