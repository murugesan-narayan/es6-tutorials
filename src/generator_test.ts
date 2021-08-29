function *createGenerator() {
    yield 1;
    console.log('After 1st yield')
    yield 2;
}

let myGen = createGenerator()

console.log(myGen.next())
console.log(myGen.next())
console.log(myGen.next())


let person6 = {
    fname: 'Kesavan',
    lname: 'Bharathi'
}

person6[Symbol.iterator] = function*() {
    let properties = Object.keys(person6)
    for (const p of properties) {
        yield this[p]
    }
}

for (const p6 of person6) {
    console.log(p6)
}
