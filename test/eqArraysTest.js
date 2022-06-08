const assertEqual = require('../assertEqual');
const head = require('../eqArrays')

// TEST CODE
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => true
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)); // => false
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false)); // => true
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)); // => false