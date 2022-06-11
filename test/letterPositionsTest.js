const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("return the indice '0' of the letter 'h' in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").h, [0]);
  });
  it("return the indice '1' of the letter 'e' in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("return the indices '2, 3' of the letter 'l' in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
  it("return the indice '4' of the letter 'o' in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").o, [4]);
  });
});