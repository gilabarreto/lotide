const assertEqual = require('../assertEqual');
const tail = require('../tail')

// TEST CODE
const original = ["Hello", "Lighthouse", "Labs"];

console.log(assertEqual(tail(original).length, 2)); // ensure we get back two elements
console.log(assertEqual(tail(original)[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(tail(original)[1], "Labs")); // ensure second element is "Labs"

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!