const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  for (let x = 0; x < array1.length; x++) {
    if (array1.length !== array2.length || array1[x] !== array2[x]) {
      return "🔴🔴🔴 Assertion Failed: The arrays are different.";
    } else {
      null;
    }
  }
  return "🟢🟢🟢 Assertion Passed: The arrays are equal.";
};

module.exports = assertArraysEqual;