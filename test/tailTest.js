/* 
### OLD LOTIDE TEST EVALUATION ###

const assertEqual = require('../assertEqual');
const tail = require('../tail')

// TEST CODE
const original = ["Hello", "Lighthouse", "Labs"];

console.log(assertEqual(tail(original).length, 2)); // ensure we get back two elements
console.log(assertEqual(tail(original)[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(tail(original)[1], "Labs")); // ensure second element is "Labs"

//TEST TO VERIFY IF THE FUNCTION IS CHANGING THE ARRAY
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!

### OLD LOTIDE TEST EVALUATION ###
*/

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("ensure we get back two elements", () => {
    const original = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(original).length, 2);
  });
  it("ensure first element is 'Lighthouse'", () => {
    const original = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(original)[0], "Lighthouse"); 
  });
  it("ensure second element is 'Labs'", () => {
    const original = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(original)[1], "Labs");
  });
});