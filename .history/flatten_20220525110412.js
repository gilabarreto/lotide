const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let x = 0; x < array1.length; x++) {
      if (array1[x] !== array2[x]) {
        return false;
      }
    }
  }
  return true;
};

const flatten = function (array1) {

  let newArray = [];

  for (let x = 0; x < array1.length; x++) {
    if (Array.isArray(array1[x])) {
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