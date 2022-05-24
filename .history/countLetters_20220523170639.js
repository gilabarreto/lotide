const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {

  const result = {};

  for (const item of string) {
    result[item] + 1;
  }
  return result;
}

console.log(countLetters("LHL"));

