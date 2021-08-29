class MyPerson {
    //there can be only one constructor per class
    constructor(name){
        this.name = name
        console.log('called MyPerson constructor...')
    }
    //this normal prototype method
    greet(){
        console.log('greet:','Hello ..', this.name)
    }
    //this is static method
    static getDefaultName(){
        console.log('called static getDefaultName')
        return 'Guest'
    }
}

let p = new MyPerson('Swami');
p.greet()
console.log(MyPerson.getDefaultName())
