// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* // TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("test", "test");
assertEqual(1, 1);
assertEqual(1, 2); */

function eqArrays(array1, array2) {
  for (let element of array1) {
    for (let x = 0; x < array1.length; x++) {
      console.log(array1[x])
/*       if (element[x] === array2[x]) {
        return true;
      } else {
        return false;
      } */
    }
  }
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false