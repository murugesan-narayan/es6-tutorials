let colors = ['Green', 'Blue', 'Yellow']

//for in statement
console.log('for in statement')
for (const iterator in colors) {
    console.log(colors[iterator])
}

//for of statement
console.log('for of statement')
for (const color of colors) {
    console.log(color)
}

//for of statement, prints A, B, C
console.log('for of statement with string chars')
for (const letter of 'ABC') {
    console.log(letter)
}