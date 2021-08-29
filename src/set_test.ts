//set init
let mySet = new Set();

mySet.add('Hello')
mySet.add(1)
mySet.add(2)

//duplicated will be omitted
mySet.add(2)

//string and numbers are different value
mySet.add('2')


//objects are different even if objs looks similar.
let obj23 = {}
let obj25 = {}
mySet.add(obj23)
mySet.add(obj25)

console.log(mySet)

//we can pass array in set init
//it will omit duplicates if any
let set2 = new Set([1,2,3,3,3])
console.log(set2)

//we can chain add methods
let set3 = new Set().add('Hello').add('World')
console.log(set3)

//has method to check availability
console.log( 'set3.has("Hello")', set3.has('Hello'))
console.log( 'set3.has("Hi")', set3.has('Hi'))

//delete method to delete a element from set
console.log('set3.delete("Hello")', set3.delete('World'))
console.log('set3', set3)
