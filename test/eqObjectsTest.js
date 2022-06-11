const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true if both objects have identical keys with identical values", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjects(cd, dc), true);
  });
  it("returns false if both objects don't have identical keys with identical values", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
});