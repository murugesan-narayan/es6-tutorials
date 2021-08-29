let sy1 = Symbol()
console.log(typeof sy1)

let sy2 = Symbol('Test')
console.log(sy2.toString())

let sy3 = Symbol('Test')
let sy5 = Symbol('Test')

//symbols always gets unique id
console.log(sy3===sy5)//false

//if you do not want to create unique id
//use it with for method.
//this registers symbol and refers the same
//if already defined. uses description as key.
let sy6 = Symbol.for('Name')
let sy7 = Symbol.for('Name')
console.log(sy6 === sy7)//true
console.log(Symbol.keyFor(sy7))

let pers = {
    [sy6]: 'Swami',
    age: 23
}
console.log(Object.getOwnPropertyNames(pers)) // returns age
console.log(Object.getOwnPropertySymbols(pers)) // returns sy6 symbol

