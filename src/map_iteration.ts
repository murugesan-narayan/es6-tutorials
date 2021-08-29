//map can be initialized with array as well
let mapTwo = new Map([
    ["fname", "Variyar"],
    ["lname", "Swamigal"],
])

console.log(mapTwo)

console.log('Keys....')
for (const key of mapTwo.keys()) {
    console.log(key)
}

console.log('Values....')
for (const value of mapTwo.values()) {
    console.log(value)
}


console.log('Entries....')
for (const entry of mapTwo.entries()) {
    console.log(entry[0],'=>',entry[1])
}