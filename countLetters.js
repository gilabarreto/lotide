// DESCRIPTION: A function that takes in a sentence and returns a count of each of the letters in the sentence.

// FUNCTION IMPLEMENTATION

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

