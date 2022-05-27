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

const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let x = 0; x < array1.length; x++) {
      if (array1[x] === array2[x]) {
        null;
      } else {
        return false;
      }
    }
    return true
  }
  return false;
};

const assertObjectsEqual = function (object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (
          Array.isArray(object1[key]) 
          && Array.isArray(object2[key]) 
          && eqArrays(object1[key], object2[key])
      ) {
        continue;
      } else if (object1[key] === object2[key]) {
        continue;
      } else {
        return `🔴🔴🔴 Assertion Failed: ${object1} !== ${object2}`;
      }
    }
    return `🟢🟢🟢 Assertion Passed: ${object1} === ${object2}`;
  }
  return `🔴🔴🔴 Assertion Failed: ${object1} !== ${object2}`;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc));