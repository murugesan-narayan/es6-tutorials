class Employee{
    constructor(name){
        console.log('called Employee constructor...')
        this.name = 'Employee: '+name
    }
    getBonusPercentage(){
        console.log('called Employee getBonusPercentage')
        return 0.1;
    }
}
//inheritance uses extends keyword
class SeniorEmployee1 extends Employee{
    //no constructor, default will call super constructor
}
let s1 = new SeniorEmployee1('Swami')
//we can call super calss function using subclass
console.log(new SeniorEmployee1('Swami').getBonusPercentage())


class SeniorEmployee2 extends Employee{
    //if sub class has constructor, you have to call super constructor
    //else it will give error
    constructor(name){
        super(name)
        console.log('SeniorEmployee2 constructor called...')
        this.name = 'SeniorEmployee2: '+ name
    }
    //overrides super calss function
    //it can return its own value or gets from super or both.
    getBonusPercentage(){
        console.log('called SeniorEmployee2 getBonusPercentage')
        return super.getBonusPercentage()+0.05;
    }

}
let s2 = new SeniorEmployee2('Swami')
console.log(s2.getBonusPercentage())