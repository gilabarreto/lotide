const assertArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    for (let x = 0; x < array1.length; x++) {
      if (array1[x] === array2[x]) {
        null;
      } else {
        return "🔴🔴🔴 Assertion Failed: The arrays are different.";
      }
      return "🟢🟢🟢 Assertion Passed: The arrays are equal.";
    }
  }
  return "🔴🔴🔴 Assertion Failed: The arrays are different.";
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3", 5]));
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]));