var getValue= function(){
    return 5;
}
console.log('Normal function: ',getValue())

const getArrowValue = () => {
    return 5;
}

console.log('Arrow function: ',getArrowValue())
console.log('Type of getArrowValue: ', typeof getArrowValue)

const getArrowValue1 = () => 5;

console.log('Arrow function with single statement: ',getArrowValue1())

const getArrowValue2 = n => n*5;

console.log('Arrow function with single argument: ',getArrowValue2(5))

const getArrowValue3 = (m, a) => m*5+a;

console.log('Arrow function with multiple argument: ',getArrowValue3(5, 3))

