/**
 * If you want to use this keyword inside arrow function,
 * Be sure that you are inside function context.
 * Otherwise assign it to other local variable.
 */
const employee = {
    id: 1,
    // this.id returns 1. This is inside a function context.
    greet1: function(){console.log('Function Def: ', this.id)},
    // this.id returns undefined. This is anonymous context.
    greet2: ()=> console.log('Arrorw Function: ', this.id),
    // this.id returns undefined. This is anonymous context. Inside that another anonymous.
    greet3: () => setTimeout(()=> console.log('SetTimeout Function: ', this.id), 1000),
    // this.id returns 1. self local variable is used to retain this.id value.  
    greet5: function(){ 
        let self = this.id;
        setTimeout(()=> console.log('SetTimeout Function using self variable: ', self), 1000)
    },
    // this.id returns 1. This is function context. Inside that another anonymous.
    // Here this.id is copied properly to anonymous function implicitly.
    greet6: function(){ setTimeout(()=> console.log('SetTimeout Arrow Function: ', this.id), 1000)},
}

employee.greet1()
employee.greet2()
employee.greet3()
employee.greet5()
employee.greet6()