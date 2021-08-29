console.log('Moudle A log 1')
//Any import statement will be moved to top, will load that first.
//named import varaibles should match same as exported
//and should have curly braces
//we can have alias name if we need
import {fname, lname as ln} from './moduleB.js'
console.log('Moudle A log 2')
import {age, gender, obj} from './moduleB.js'

console.log(fname)
//when we give alias name for the import we should refer and use alias only.
console.log(ln)

console.log(age)
console.log(gender)

//Import variable are read only, you can not change it.
//age = 35

//but with object import, we can change obj properties.
obj.profession = 'Social Activist'
console.log(obj)

//default import, do not use curly brace
//it can have different variable name, need not be same as exported
import module_name_b from './moduleB.js'
console.log(module_name_b)

//default import also can have alias, but we need curly braces for that. 
import {default as mB} from './moduleB.js'
console.log(mB)

//funtion import same as other variable import
import {greet} from './moduleB.js'
greet('Hello world')

//class import same as other variable import
import {GreetMessage} from './moduleB.js'
let gm = new GreetMessage()
gm.greet('Hello world')

