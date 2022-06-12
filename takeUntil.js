// DESCRIPTION: A function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.

// FUNCTION IMPLEMENTATION

const assertArraysEqual = require('./assertArraysEqual');

const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let x = 0; x < array1.length; x++) {
      if (array1[x] === array2[x]) {
        null;
      } else {
        return false;
      }
    }
    return true
  }
  return false;
};

const takeUntil = function (array, callback) {
  for (let item of array) {
    if (callback(item)) {
      for (let x = 0; x < array.length; x++) {
        if (array[x] === item) {
          return array.slice(0, x)
        }
      }
    }
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

/* [ 1, 2, 5, 7, 2 ] Expected Output
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]  */

console.log(assertArraysEqual(data1, [1, 2, 5, 7, 2, -1, 2, 4, 5]));
console.log(assertArraysEqual(data2, ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]));

