// DESCRIPTION: A function that takes in an array and returns the first element in the array.

// FUNCTION IMPLEMENTATION

const assertEqual = require('./assertEqual');

const head = function(item) {
  return item[0];
};

module.exports = head;