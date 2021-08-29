"use strict";
var person5 = {
    fname: 'Kesavan',
    lname: 'Bharathi'
};
person5[Symbol.iterator] = function () {
    var _this = this;
    var properties = Object.keys(person5);
    var count = 0;
    var isDone = false;
    var next = function () {
        if (count >= properties.length) {
            isDone = true;
        }
        return { done: isDone, value: _this[properties[count++]] };
    };
    return { next: next };
};
for (var _i = 0, person5_1 = person5; _i < person5_1.length; _i++) {
    var p_1 = person5_1[_i];
    console.log(p_1);
}
//# sourceMappingURL=obj_iterator.js.map