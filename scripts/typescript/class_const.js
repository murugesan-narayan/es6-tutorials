"use strict";
var PersonType = /** @class */ (function () {
    function PersonType(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    return PersonType;
}());
var p2 = new PersonType('Swami', 'Vivekanandhar');
console.log(p2.fname);
console.log(p2.lname);
var PersonTypeSimplified = /** @class */ (function () {
    function PersonTypeSimplified(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    return PersonTypeSimplified;
}());
p2 = new PersonTypeSimplified('Annai', 'Theresa');
console.log(p2.fname);
console.log(p2.lname);
//# sourceMappingURL=class_const.js.map