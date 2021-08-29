"use strict";
function printSal(value) {
    console.log(value);
}
//this will print undefined
printSal();
function printSal1(value) {
    if (value === void 0) { value = 2000; }
    console.log(value);
    //Arguments will have only passed params, not default params
    console.log('Args Passed:', arguments.length);
}
//default value will be printed.
printSal1();
//passed value will get printed
printSal1(5000);
//default value will be printed.
printSal1(undefined);
function printSalWithBonus(value, bonus) {
    if (value === void 0) { value = 2000; }
    if (bonus === void 0) { bonus = 0.1; }
    console.log('Sal:', value, 'Bonus:', value * bonus);
}
//prints with default value for both
printSalWithBonus();
//prints with passed sal but with defult bonus
//right hand side we can just ignore if we do not want to pass
printSalWithBonus(5000);
//prints with default sal but with passed bonus
//left hand side we should pass undefined, if we do not want to pass
printSalWithBonus(undefined, 0.2);
/**
 * We can lookback for refering other params but not look forward.
 * @param value
 * @param bonus
 */
function printSalWithBonus_1(value, bonus) {
    if (value === void 0) { value = 2000; }
    if (bonus === void 0) { bonus = value * 0.1; }
    console.log('Sal_1:', value, 'Bonus_1:', bonus);
}
//prints with default value for both; default value is refered in bonus
printSalWithBonus_1();
//passed value is refered in bonus
printSalWithBonus_1(5000);
var percentBonus = 0.1;
//We can assign a variable for default value
function printSalWithBonus_v1(value, bonus) {
    if (value === void 0) { value = 2000; }
    if (bonus === void 0) { bonus = value * percentBonus; }
    console.log('Sal_v1:', value, 'Bonus_v1:', bonus);
}
//prints with default value for both; default value is refered in bonus
printSalWithBonus_v1();
//passed value is refered in bonus
printSalWithBonus_v1(5000);
var percentBonusFunc = function () { return 0.1; };
//We can assign a function for default value
function printSalWithBonus_v2(value, bonus) {
    if (value === void 0) { value = 2000; }
    if (bonus === void 0) { bonus = value * percentBonusFunc(); }
    console.log('Sal_v2:', value, 'Bonus_v2:', bonus);
}
//prints with default value for both; default value is refered in bonus
printSalWithBonus_v2();
//passed value is refered in bonus
printSalWithBonus_v2(5000);
//# sourceMappingURL=default_prams.js.map