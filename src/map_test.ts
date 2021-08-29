let mapOne = new Map()
mapOne.set('fname', 'Variyar')
mapOne.set('lname', 'Swamigal')
//both {} objs are refered as separate one
mapOne.set({}, '1')
mapOne.set({}, '2')
console.log(mapOne)
console.log('Map has key fname',mapOne.has('fname'))
mapOne.delete('fname')
console.log('Map has key fname',mapOne.has('fname'))
console.log(mapOne)
//removes all elements from map
mapOne.clear()
console.log(mapOne)