const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("ensure we get back two elements", () => {
    const original = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(original).length, 2);
  });
  it("ensure first element is 'Lighthouse'", () => {
    const original = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(original)[0], "Lighthouse"); 
  });
  it("ensure second element is 'Labs'", () => {
    const original = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(original)[1], "Labs");
  });
});