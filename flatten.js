// DESCRIPTION: A function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.

// FUNCTION IMPLEMENTATION

const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const flatten = function(array1) {

  let newArray = [];

  array1.forEach((item) => {
    if (Array.isArray(item)) {
      const recursion = flatten(item);
      recursion.forEach((item) => newArray.push(item));
    } else {
      newArray.push(item);
    }
  });

  return newArray;
};

module.exports = flatten;