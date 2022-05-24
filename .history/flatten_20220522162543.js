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

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]