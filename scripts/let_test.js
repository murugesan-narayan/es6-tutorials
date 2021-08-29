"use strict";
function let1_greetPerson(name) {
    /**
     * let declaration is local to the block.
     * It is block scope, so it can not be accessed outside block
     * You can not redeclare let variable withing the same block, you will get error.
     */
    var hello = "Hello ";
    var greet;
    if (name === "Chandler") {
        greet = hello + name;
    }
    else {
        greet = hello + "Guest";
    }
    console.log(greet, ', This is let declartion test');
}
let1_greetPerson("Chandler");
//# sourceMappingURL=let_test.js.map