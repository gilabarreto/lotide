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

const middle = function (array1) {

  let newArray = [];
  let index1;
  let index2;

  if (array1.length < 3) {
    null
  } else if (array1.length % 2 !== 0) {
    index1 = array1.length / 2
    index2 = array1.length / 2 + 1
    newArray.push(index1, index2)
  } else {
    newArray.push(array1.length / 2)
  }
  console.log(newArray)
}

middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
middle([1, 2, 3, 4, 5, 6, 7, 8]) // => [3, 4]