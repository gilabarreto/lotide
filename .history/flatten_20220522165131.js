const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    } else {
      null;
    }
  }
  return true;
};

const flatten = function (array1) {
  /** 
   * 1 - Loop throught the array; ok
   * 2 - Check if item is not array;
   * 3 - If it's an array, go inside and check items;
   * 4 - Do a loop in the nested array
  */

  let newArray = [];

  for (let x = 0; x < array1.length; x++) {
    if (typeof array1[x] === "object") {
      for (let y = 0; y < array1[x].length; y++) {
        newArray.push(array1[x][y])
      }
    } else {
      newArray.push(array1[x])
    }
  }
  return newArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]