let firstName = 'Swami'
let lastName = 'Vivekanandar'

//we refer outside variables inside object 
let person = {
    firstName: firstName,
    lastName: lastName
}

console.log('First Name', person.firstName)
console.log('Last Name', person.lastName)

// we can also omit the assignment if obj variable is same as refered variable
person = {
    firstName,
    lastName
}

console.log('First Name', person.firstName)
console.log('Last Name', person.lastName)


let personFunc = function(firstName, lastName, age) {
    return {
        firstName,
        lastName,
        age,
        //normal function declaration inside obj
        isSenior: function(){
            return age>60
        },
        //shortcut function declaration inside obj
        //ommited function keyword and semicolon.
        isMidSenior(){
            return age<60 && age>40
        }
    }
}
person = personFunc(firstName, lastName, 67)
console.log('First Name', person.firstName)
console.log('Last Name', person.lastName)
console.log('Person is Senior Citizen', person.isSenior())
console.log('Person is Mid Senior Citizen', person.isMidSenior())


const lname = 'last name'
const age = 'age'
person = {
    //properties can have space, but they have to be accessed with map syntax
    'first name': firstName,
    //properties can refer any other variable for its name
    [lname]: lastName,
    [age]: 12
}
console.log(person['first name'])
console.log(person[lname])
console.log(person.age)