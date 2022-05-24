const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {

  const result = {};
  const newArray = string.split("")
  for (const item of newArray) {
    if (result[item]) {
      result[item] += 1
    } else 
    result[item] = 1
  }
  return result;
}

console.log(countLetters("LHL"));

