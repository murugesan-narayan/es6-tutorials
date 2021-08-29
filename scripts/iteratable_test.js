"use strict";
var arr5 = [1, 2, 3];
function arrIterator(array) {
    var count = 0;
    return {
        next: function () {
            return count < array.length ?
                { value: array[count++], done: false } :
                { value: undefined, done: true };
        }
    };
}
var arrItr = arrIterator(arr5);
console.log(arrItr.next());
console.log(arrItr.next());
console.log(arrItr.next());
console.log(arrItr.next());
console.log(arrItr.next());
//# sourceMappingURL=iteratable_test.js.map