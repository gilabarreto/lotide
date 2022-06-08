const assertArraysEqual = require('./assertArraysEqual')
const eqArrays = require('../eqArrays');

const middle = function(array1) {

  let newArray = [];
  let index1;
  let index2;

  if (array1.length < 3) {
    null;
  } else if (array1.length % 2 !== 0) {
    index1 = Math.floor(array1.length / 2);
    newArray.push(array1[index1]);

  } else {
    index1 = array1.length / 2 - 1;
    index2 = array1.length / 2;
    newArray.push(array1[index1], array1[index2]);
  }
  return newArray;
};

module.exports = middle;
