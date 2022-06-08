const assertEqual = require('../assertEqual');

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp")); // Assertion Failed 
console.log(assertEqual("test", "test")); // Assertion Passed
console.log(assertEqual(1, 1)); // Assertion Passed
console.log(assertEqual(1, 2)); // Assertion Failed