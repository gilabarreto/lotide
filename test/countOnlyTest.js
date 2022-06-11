const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("returns '1' for a specific subset of an item", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result["Jason"], 1);
  });
  it("returns '2' for a specific subset of items", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result["Fang"], 2);
  });
  it("returns undefined when given name's value is false", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result["Agouhanna"], undefined);
  });
  it("returns undefined when given name does not match", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result["Karima"], undefined);
  });
});