let moduleName = 'moduleB'

//individual named export
export let fname = 'Swami'
export let lname = 'Vivekanandhar'

let age = 25
let gender = 'Male'

let obj = {
    name: 'Nammalvar',
    profession: 'Farmer'
} 


//group named export
export {age, gender, obj}

console.log('Module B loaded')

//we can export only one default varibale.
export default moduleName;


//named function export
export function greet(message){
    console.log(message)
}

//named class export
export class GreetMessage{
    constructor(){
        console.log('GreetMessage constructor')
    }
    greet(message){
        console.log('GreetMessage: ', message)
    }
}
