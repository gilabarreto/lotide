/* 
### OLD LOTIDE TEST EVALUATION ###

const assertEqual = require('../assertEqual');
const head = require('../head')

// TEST CODE
console.log(assertEqual(head([5,6,7]), 5)); // Assertion Passed
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Lighthouse")); // Assertion Failed

### OLD LOTIDE TEST EVALUATION ###
*/

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello'); 
  });
});