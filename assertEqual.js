// DESCRIPTION: A function that takes in 2 values and returns true if they are equal and false otherwise.

// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`;
  }
};

module.exports = assertEqual;