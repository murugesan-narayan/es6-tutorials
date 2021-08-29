let arr5 = [1,2,3]

function arrIterator(array){
    let count = 0
    return {
        next: function(){
            return count < array.length?
                    {value: array[count++], done: false}:
                    {value: undefined, done: true}
        }
    } 
}
let arrItr = arrIterator(arr5)

console.log(arrItr.next())
console.log(arrItr.next())
console.log(arrItr.next())
console.log(arrItr.next())
console.log(arrItr.next())