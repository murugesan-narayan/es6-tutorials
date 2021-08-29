"use strict";
function greetPerson(name) {
    var hello = "Hello ";
    if (name === "Chandler") {
        greet = hello + name;
    }
    else {
        greet = hello + "Guest";
    }
    /**
     * Any var declaration will be moved to top of the function
     * Any var declaration is also a functional scope, so it can be accessed outside loop as well
     */
    var greet;
    console.log(greet);
}
greetPerson("Chandle");
//# sourceMappingURL=var_test.js.map