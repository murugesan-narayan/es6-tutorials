let person5 = {
    fname: 'Kesavan',
    lname: 'Bharathi'
}

person5[Symbol.iterator] = function() {
    let properties = Object.keys(person5)
    let count = 0
    let isDone = false
    let next = () => {
        if (count >= properties.length) {
            isDone = true
        }
        return {done: isDone, value: this[properties[count++]]};
    }
    return {next};
}

for (const p of person5) {
    console.log(p)
}