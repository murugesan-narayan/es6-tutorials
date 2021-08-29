let set11 = new Set();
let a1 = 5
set11.add(a1)
a1 = null
//still holds 5 in set
console.log(set11)
//we can get it back like below
let a12 = [...set11][0]
console.log(a12)

//in week set, null references are removed.
let set12 = new WeakSet();
let a13 = {}
set12.add(a13)
//now it will remove a13 when grabage happens
a13 = null
console.log(set12)