//interface declartion
//? defines optional property
interface Student{
    name: string,
    age?: number,
    class?: string,
    gender: string
}

//normal definition with all property
let st2:Student = {
    name: 'Swami',
    age: 35,
    class: '6C',
    gender: 'Male'
}

console.log(st2)

//definition without default property
let st3:Student = {
    name: 'Theresa',
    gender: 'Female'
}

console.log(st3)
