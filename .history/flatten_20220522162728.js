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

const flatten = function (array1) {
  
  let newArray = [];
  
  for (let x = 0; x < array1.length; x++) {
    let flag = false;

    for (let y = 0; y < array[x].length; y++) {
      if (array1[x] === array[y]) {
        flag = true;
      }
    } 
    if (flag === false) {
      newArray.push(array1[x]);
    }
  }
  return newArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]