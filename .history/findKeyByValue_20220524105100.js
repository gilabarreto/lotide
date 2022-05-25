const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (obj, keyObj) {

  let result;

  for (let x = 0; x < obj.length; x++) {
    console.log(x)
    console.log(obj[x])

    if (obj[x] === keyObj) {
      result = obj[key]
    } else {
      undefined
    }
    return result;
  }
}
/*   for (let key in obj) {
    
    console.log(obj[key])
    console.log(keyObj)

    if (obj[key] !== keyObj) {
      undefined
    } else {
      result = obj[key]
    }
    return result;
  } */

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));

/* assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); */