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

  if (Object.keys(object1).length === Object.keys(object2).length) {

    for (let x = 0; x < Object.keys(object1).length; x++) {
      console.log(object1[x])
      console.log(object2[x])
      if (Array.isArray(object1[x]) || Array.isArray(object2[x])) {
        for (let y = 0; y < array1[x].length; y++) {

          if (object1[x][y] !== object2[x][y])

            return true
        }
      }

      if (object1[x] === object2[x]) {

        return true;

      } else {
        null;
      }
    }
  }
  return false;

  /*   if (Object.keys(object1).length === Object.keys(object2).length) {
      for (let x = 0; x < Object.keys(object1).length; x++) {
        if (object1[x] === object2[x]) {
          return true;
        } else {
          null;
        }
      }
    }
    return false; */
};

/* const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); */

const cd = { c: "1", d: ["2", 3] };
/* const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true */

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false