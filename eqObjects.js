// Returns true if both objects have identical keys with identical values. Otherwise returns false.

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