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

console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]))

console.log(without(["1", "2", "3"], ["1", "2", "3"]));

console.log(without([1, 2, 3], [3, 2, 1]));

console.log(without(["1", "2", "3"], ["1", "2", 3]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));