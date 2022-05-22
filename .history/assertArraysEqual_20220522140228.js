/* const assertArraysEqual = function(array1, array2) {
  for (let x = 0; x < array1.length; x++) {
    if (array1.length !== array2.length || array1[x] !== array2[x]) {
      return "🔴🔴🔴 Assertion Failed: The arrays are different.";
    } else {
      null;
    }
  }
  return "🟢🟢🟢 Assertion Passed: The arrays are equal.";
}; */

const assertArraysEqual = function (array1, array2) {
  for (let index1 of array1) {
    let index2 = 0;
    console.log(index1)
    if (array1.length !== array2.length || array1[index1] !== array2[index2]) {
      console.log(array1[index1])
      index2++
      return "🔴🔴🔴 Assertion Failed: The arrays are different.";
    } else {
      null;
    }
  }
  return "🟢🟢🟢 Assertion Passed: The arrays are equal.";
};

const words = ["a", "b", "c"];

console.log(assertArraysEqual(words, ["a", "b", "c"]));
/* console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); */