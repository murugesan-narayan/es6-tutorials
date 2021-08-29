let arr = [1,2,3]

arr.forEach(funcArrayLoopCallBack)
function funcArrayLoopCallBack(val, ind, arr){
    console.log(val, 'at', ind, 'in', arr)
}

let mapThree = new Map()
mapThree.set('fname', 'Variyar')
mapThree.set('lname', 'Swamigal')

mapThree.forEach(funcMapLoopCallBack)
function funcMapLoopCallBack(val, key, map){
    console.log(val, 'at', key, 'in', map)
}

let setThree = new Set([1,2,3,3])
setThree.forEach(funcSetLoopCallBack)
//value and key both refers same for set.
function funcSetLoopCallBack(val, key, set){
    console.log(val, 'at', key, 'in', set)
}