const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const result = ["Hello", "Lighthouse", "Labs"];

const tail = function(item) {
  console.log(item.slice(0))
};

tail(result)

// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!