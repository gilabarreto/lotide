// DESCRIPTION: A function that takes in 2 arrays and returns true if the arrays are equal and false otherwise.

// FUNCTION IMPLEMENTATION

const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let x = 0; x < array1.length; x++) {
      if (array1[x] === array2[x]) {
        null;
      } else {
        return false;
      }
    }
    return true;
  }
  return false;
};

module.exports = eqArrays;