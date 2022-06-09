const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns an empty array if only one element", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns an empty array if only two elements", () => {
    assert.deepEqual(middle([1,2]), []); 
  });
  it("returns middle element if array is odd", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
  it("returns two middle elements if array is even", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
});