
//function can be called before declaration.
//prints Hello...
hello()
function hello(){
    console.log('Hello...')
}

//We can not use before declartion gives error, 
//but in function you can do that.
//let p1 = new Person();

class Person {
    greet(){
        console.log('Hello Person..')
    }
}

let p = new Person();
//prints function.
//classes are special type of functions.
console.log(typeof Person)

//this returns true
console.log(p.greet === Person.prototype.greet)
