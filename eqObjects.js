// DESCRIPTION: A function that takes in 2 objects and return true if they are equal and false otherwise.

// FUNCTION IMPLEMENTATION

const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (
        Array.isArray(object1[key])
          && Array.isArray(object2[key])
          && eqArrays(object1[key], object2[key])
      ) {
        continue;
      } else if (object1[key] === object2[key]) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }
  return false;
};

module.exports = eqObjects;