let num1;

/**
 * We can not left uninitialized with const declaratoin.
 * Can not duplicate const declartion
 * You can not reassign to a new value
 * But you can reassign a new value to const object property.
 * 
 * So use const when reassign is NOT expected.
 * If reassign is expected use let.
 */

//const num2;
const num2 = 5;
//const num2 = 5;
//num2 = 5;


const obj1 = {name: 'KP'}
obj1.name='test for const obj property mutation'
console.log(obj1.name)
