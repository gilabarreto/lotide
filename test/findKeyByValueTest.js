const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("return the first key containing the value 'drama' which is 'The Wire'", () => {
    const bestTVShowsByGenre = { sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined if no key is found'", () => {
    const bestTVShowsByGenre = { sciFi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire" };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});