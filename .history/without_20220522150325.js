const assertArraysEqual = function (array1, array2) {
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

const words = ["hello", "world", "lighthouse"];

console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]))
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));

console.log(without([1, 2, 3], [3, 2, 1]));

console.log(without(["1", "2", "3"], ["1", "2", 3]));