const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual')

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // Assertion Passed (Equal Arrays)

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // Assertion Passed
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // Assertion Failed

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // Assertion Passed
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // Assertion Failed

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // Assertion Passed
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"])); // Assertion Failed