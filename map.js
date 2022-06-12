// DESCRIPTION: A function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.

// FUNCTION IMPLEMENTATION

const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);
console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']));