const assertArraysEqual = function(array1, array2) {
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return "🔴🔴🔴 Assertion Failed: The arrays are different.";
    } else {
      null;
    }
  }
  return "🟢🟢🟢 Assertion Passed: The arrays are equal.";
};

const without = function(array1, array2) {
  for (let x = 0; x < array1.length; x++) {
    let itemsToRemove = [];
    if (array1[x] !== array2[x]) {
      itemsToRemove.push(array1[x])
      return itemsToRemove;
    } else {
      null;
    }
/*   }
  return true; */
};

console.log(without([1, 2, 3], [1, 2, 3]))

/* console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); */