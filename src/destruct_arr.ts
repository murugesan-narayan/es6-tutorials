let employee = ['Swami','Vivekanandar','Male']
//each array element is mapped corresponding to the left handside variables 
let [firstName, lastName, gender, age, citizen='Indian'] = employee
//Age returns undefined as we have only three array elements
// and citizen returns defualt value.
console.log('Destructured: ', firstName, lastName, gender, age, citizen)

let [, , age1] = ['fN', 'lN', 25]
//only age is destructured  first two elements are skipped.
console.log('age',age1)


let [name1, ...marks] = ['Swami', 35, 25, 75, 55]
//only age is destructured  first two elements are skipped.
console.log('name',name1, 'marks', marks)
