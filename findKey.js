// DESCRIPTION: A function that takes in an object and callback and returns the first key that meets the criteria specified in callback.

// FUNCTION IMPLEMENTATION

const assertEqual = require('./assertEqual');

const findKey = function (obj, keyObj) {
  for (let key in obj) {
    if (keyObj(obj[key]))
      return key
  }
}

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 4 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 4 }
}, x => x.stars === 4) // => "noma"

console.log(result)