// import { without } from "./node_modules/lodash/";

// console.log(without);

var _ = require("lodash");
// console.log(_);

var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("answer : ", _.without(array, 3));
