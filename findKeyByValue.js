/* The function findKeyByValue takes in an object and a value,
scans the object and return the first key which contains the given value.
2If no key with that given value is found, then it should return undefined. */

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