// DESCRIPTION: A function that takes in a string and returns all indices of letter positions in the string.

// FUNCTION IMPLEMENTATION

const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(newString) {

  const result = {};
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] !== " ") {
      if (result[newString[i]]) {
        result[newString[i]].push(i);
      } else {
        result[newString[i]] = [i];
      }
    }
  }
  return result;
};

module.exports = letterPositions;