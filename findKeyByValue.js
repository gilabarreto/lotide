// DESCRIPTION: A function that takes in an object and a value and returns the first key that corresponds to that value.

// FUNCTION IMPLEMENTATION

const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj, keyObj) {

  let result;

  for (let key in obj) {
    if (obj[key] === keyObj) {
      result = key;
    } else {
      null;
    }
  }
  return result;
};

module.exports = findKeyByValue;