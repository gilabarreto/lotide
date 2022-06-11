/* We'll implement a new function letterPositions which will return all the indices (zero-based positions)
in the string where each character is found.

For each letter, instead of returning just one number to represent its number of occurrences,
multiple numbers may be needed to represent all the places in the string that it shows up. */

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