const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (obj, keyObj) {

  let result;
  for (let key in obj) {
    console.log(keyObj(key))

    if (keyObj(key))
    console.log(keyObj(key))
        console.log(obj[key])
      for (let x = 0; x < obj.length; x++) {
        console.log(key)
        console.log(obj)
        console.log(obj[key])
        console.log(keyObj)
        return key
      }
  }
}

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(result)