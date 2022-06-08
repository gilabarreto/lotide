/* 
### OLD LOTIDE TEST EVALUATION ###

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

### OLD LOTIDE TEST EVALUATION ###
*/

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns an empty array if only one element", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns an empty array if only two elements", () => {
    assert.deepEqual(middle([1,2]), []); 
  });
  it("returns middle element if array is odd", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it("returns two middle elements if array is even", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
});