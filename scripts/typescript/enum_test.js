"use strict";
var GRAPH_DIRECTION;
(function (GRAPH_DIRECTION) {
    GRAPH_DIRECTION[GRAPH_DIRECTION["EAST"] = 1] = "EAST";
    GRAPH_DIRECTION[GRAPH_DIRECTION["WEST"] = 2] = "WEST";
    GRAPH_DIRECTION[GRAPH_DIRECTION["NORTH"] = 3] = "NORTH";
    GRAPH_DIRECTION[GRAPH_DIRECTION["SOUTH"] = 5] = "SOUTH";
})(GRAPH_DIRECTION || (GRAPH_DIRECTION = {}));
var myGD = GRAPH_DIRECTION.EAST;
console.log('EAST Marked as', myGD);
console.log('Enum constant of', myGD, GRAPH_DIRECTION[myGD]);
//# sourceMappingURL=enum_test.js.map