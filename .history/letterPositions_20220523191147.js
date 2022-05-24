/* const assertEqual = function (actual, expected) {
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
}; */


const letterPositions = function (string) {

  const result = {};
  const newArray = string.split("");
  for (const item of newArray) {
    if (result[item]) {
      result[item].push(newArray.indexOf(item))
    } else {
      result[item] = [];
      result[item].push(newArray.indexOf(item))
    }
  }
  return result;
};

console.log(letterPositions("hello"))

