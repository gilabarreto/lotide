const assertArraysEqual = function(array1, array2) {
  for (let x = 0; x < array1.length; x++) {
    if (array1.length !== array2.length || array1[x] !== array2[x]) {
      return "🔴🔴🔴 Assertion Failed: The arrays are different.";
    } else {
      null;
    }
  }
  return "🟢🟢🟢 Assertion Passed: The arrays are equal.";
};

const without = function (array1, array2) {
  let itemsToRemove = [];
  for (let x = 0; x < array1.length; x++) {
    for (let y = 0; y < array2.length; y++)
    if (array1[x] !== array2[y]) {
      itemsToRemove.push(array1[x])
    } else {
      null
    }
  }
  return itemsToRemove;
}

// console.log(without([1, 2, 4], [1, 2, 3]))

const words = ["hello", "world", "lighthouse"];

console.log(without(words, ["lighthouse"]))

console.log(assertArraysEqual(words, ["hello", "lighthouse"]))

/* console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); */