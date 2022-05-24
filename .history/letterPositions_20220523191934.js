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


const letterPositions = function (string) {

  const result = {};
  const newArray = string.split("");
  for (const item of newArray) {
    if (result[item]) {
      result[item].push(newArray.indexOf(item) + 1)
    } else {
      result[item] = [];
      result[item].push(newArray.indexOf(item))
    }
  }
  return result;
};

console.log(letterPositions("hello"))
console.log(assertArraysEqual(letterPositions("hello").o, [4]))