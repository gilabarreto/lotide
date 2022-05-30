const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (obj, keyObj) {

  let result;

  for (let key in obj) {
    console.log(obj[key])
      console.log(keyObj)
      console.log(key)
    if (obj[key] === keyObj) {
      /* console.log(obj[key])
      console.log(keyObj)
      console.log(key) */
      result = key;
    } else {
      null
    }
  }
  return result;
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))

/* assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); */