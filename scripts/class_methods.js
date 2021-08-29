"use strict";
var MyPerson = /** @class */ (function () {
    //there can be only one constructor per class
    function MyPerson(name) {
        this.name = name;
        console.log('called MyPerson constructor...');
    }
    //this normal prototype method
    MyPerson.prototype.greet = function () {
        console.log('greet:', 'Hello ..', this.name);
    };
    //this is static method
    MyPerson.getDefaultName = function () {
        console.log('called static getDefaultName');
        return 'Guest';
    };
    return MyPerson;
}());
var p = new MyPerson('Swami');
p.greet();
console.log(MyPerson.getDefaultName());
//# sourceMappingURL=class_methods.js.map