/* const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
}; */

const assertArraysEqual = function(array1, array2) {
  for (let x = 0; x < array1.length; x++) {
    let result = "";
    if (array1[x] !== array2[x]) {
      result = "false";
      
    } else {
      null;
    }
  }
  console.log(result);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

/* assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); */