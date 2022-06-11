// Flatten is a function which can flatten into a single-level array an array with other arrays inside.

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