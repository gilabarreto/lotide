// DESCRIPTION: a function that takes in an array and returns everything except the first element of the array.

// FUNCTION IMPLEMENTATION

const assertEqual = require('./assertEqual');

const tail = function(index) {
  return index.slice(1);
};

module.exports = tail;