let perObj = {
    firstName: 'Swami',
    lastName: 'Vivekanandar',
    age: 35
}
// we use curly braces for obj destructuring
// we can use colon for alias name
// we can also use default value.
let {firstName, lastName: ln, age, gender='Male'} = perObj
console.log(firstName, ln, age, gender)
