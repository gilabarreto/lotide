// DESCRIPTION: a function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.

// FUNCTION IMPLEMENTATION

const assertArraysEqual = require('./assertArraysEqual');

const without = function (array1, array2) {
  
  let itemsToRemove = [];
  
  for (let x = 0; x < array1.length; x++) {
    let flag = false;

    for (let y = 0; y < array2.length; y++) {
      if (array1[x] === array2[y]) {
        flag = true;
      }
    } 
    if (flag === false) {
      itemsToRemove.push(array1[x]);
    }
  }
  return itemsToRemove;
}

console.log(without(["1", "2", "3"], ["1", "2", "3"]));

console.log(without([1, 2, 3], [3, 2, 1]));

console.log(without(["1", "2", "3"], ["1", "2", 3]));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // No need to capture return value for this test case.
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"])); // Make sure the original array was not altered by the without function.