const assertEqual = require('./assertEqual');

const countLetters = function(newString) {

  const result = {};
  const newArray = newString.split("");
  for (const item of newArray) {
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }
  return result;
};

const newString = "lighthouse in the house"
console.log(countLetters(newString));
console.log(newString)

console.log(countLetters("LHL"));

