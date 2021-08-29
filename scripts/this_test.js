"use strict";
var _this = this;
/**
 * If you want to use this keyword inside arrow function,
 * Be sure that you are inside function context.
 * Otherwise assign it to other local variable.
 */
var employee = {
    id: 1,
    // this.id returns 1. This is inside a function context.
    greet1: function () { console.log('Function Def: ', this.id); },
    // this.id returns undefined. This is anonymous context.
    greet2: function () { return console.log('Arrorw Function: ', _this.id); },
    // this.id returns undefined. This is anonymous context. Inside that another anonymous.
    greet3: function () { return setTimeout(function () { return console.log('SetTimeout Function: ', _this.id); }, 1000); },
    // this.id returns 1. self local variable is used to retain this.id value.  
    greet5: function () {
        var self = this.id;
        setTimeout(function () { return console.log('SetTimeout Function using self variable: ', self); }, 1000);
    },
    // this.id returns 1. This is function context. Inside that another anonymous.
    // Here this.id is copied properly to anonymous function implicitly.
    greet6: function () {
        var _this = this;
        setTimeout(function () { return console.log('SetTimeout Arrow Function: ', _this.id); }, 1000);
    },
};
employee.greet1();
employee.greet2();
employee.greet3();
employee.greet5();
employee.greet6();
//# sourceMappingURL=this_test.js.map