"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name) {
        console.log('called Employee constructor...');
        this.name = 'Employee: ' + name;
    }
    Employee.prototype.getBonusPercentage = function () {
        console.log('called Employee getBonusPercentage');
        return 0.1;
    };
    return Employee;
}());
//inheritance uses extends keyword
var SeniorEmployee1 = /** @class */ (function (_super) {
    __extends(SeniorEmployee1, _super);
    function SeniorEmployee1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SeniorEmployee1;
}(Employee));
var s1 = new SeniorEmployee1('Swami');
//we can call super calss function using subclass
console.log(new SeniorEmployee1('Swami').getBonusPercentage());
var SeniorEmployee2 = /** @class */ (function (_super) {
    __extends(SeniorEmployee2, _super);
    //if sub class has constructor, you have to call super constructor
    //else it will give error
    function SeniorEmployee2(name) {
        var _this = _super.call(this, name) || this;
        console.log('SeniorEmployee2 constructor called...');
        _this.name = 'SeniorEmployee2: ' + name;
        return _this;
    }
    //overrides super calss function
    //it can return its own value or gets from super or both.
    SeniorEmployee2.prototype.getBonusPercentage = function () {
        console.log('called SeniorEmployee2 getBonusPercentage');
        return _super.prototype.getBonusPercentage.call(this) + 0.05;
    };
    return SeniorEmployee2;
}(Employee));
var s2 = new SeniorEmployee2('Swami');
console.log(s2.getBonusPercentage());
//# sourceMappingURL=class_inheritance.js.map