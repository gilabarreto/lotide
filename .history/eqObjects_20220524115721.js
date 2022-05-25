const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  for (let x = 0; x < object1.length; x++) {
    if (Object.keys(object1).length !== Object.keys(object2).length &&
      object1[x] !== object2[x]) {
      return false;
    } else {
      null;
    }
  }
  console.log(Object.keys(object2).length)
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

/* const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false) */