class PersonType{
    public fname: string;
    public lname: string;
    constructor(fname: string, lname: string){
        this.fname = fname
        this.lname = lname
    }
}
let p2 = new PersonType('Swami','Vivekanandhar')
console.log(p2.fname)
console.log(p2.lname)

class PersonTypeSimplified{
    constructor(public fname: string, public lname: string){

    }
}

p2 = new PersonTypeSimplified('Annai','Theresa')
console.log(p2.fname)
console.log(p2.lname)
