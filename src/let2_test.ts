/**
 * This will result in printing index value as 5
 * in all the iteration, because var is function scope,
 * when the its value changes refelects in all the references
 * used by closures. 
 */
for (var index = 0; index < 5; index++) {
    setTimeout(()=>console.log(index), 1000)
}

/**
 * Here let is local scope, so closure gets own copy of value for its reference
 */
for (let index = 0; index < 6; index++) {
    setTimeout(()=>console.log(index), 1000)
}