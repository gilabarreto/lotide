/* const assertArraysEqual = function(array1, array2) {
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return "🔴🔴🔴 Assertion Failed: The arrays are different.";
    } else {
      null;
    }
  }
  return "🟢🟢🟢 Assertion Passed: The arrays are equal.";
}; */


const letterPositions = function(newString) {

  const result = {};
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] !== " ") {
      if (result[newString[i]]) {
        result[newString[i]].push(i);
      } else {
        result[newString[i]] = [i];
      }
    }
  }
  return result;
};

console.log(letterPositions("hello").l);

console.log(letterPositions("hello"));
/* console.log(assertArraysEqual(letterPositions("hello").h, [0]));
console.log(assertArraysEqual(letterPositions("hello").e, [1]));
console.log(assertArraysEqual(letterPositions("hello").l, [2, 3]));
console.log(assertArraysEqual(letterPositions("hello").o, [4])) ;*/
