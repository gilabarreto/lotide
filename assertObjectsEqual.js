// DESCRIPTION: A function that takes in 2 objects and returns true if they are equal and false otherwise.

// FUNCTION IMPLEMENTATION

const eqArrays = require('./eqArrays');

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (
        Array.isArray(object1[key]) && Array.isArray(object2[key]) && eqArrays(object1[key], object2[key])
      ) {
        continue;
      } else if (object1[key] === object2[key]) {
        continue;
      } else {
        return `🔴🔴🔴 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
      }
    }
    return `🟢🟢🟢 Assertion Passed: ${inspect(object1)} === $${inspect(object2)}`;
  }
  return `🔴🔴🔴 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc));