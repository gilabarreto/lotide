// FUNCTION IMPLEMENTATION
function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
}

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("test", "test");
assertEqual(1, 1);
assertEqual(1, 2);