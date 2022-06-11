const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("return into a single-level array an array with other arrays inside", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});