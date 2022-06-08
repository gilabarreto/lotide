const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

// TEST CODE
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

//TEST TO VERIFY IF THE FUNCTION IS CHANGING THE ARRAY
const newArray = [1, 2, 3, 4, 5, 6]; 

middle(newArray); // => [3, 4]

console.log(newArray) // => [1, 2, 3, 4, 5, 6]