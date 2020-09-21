const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.notStrictEqual(middle([1, 2, 3]), 2);
  });
  it("returns '5' for ['5']", () => {
    assert.notStrictEqual(middle(['5']), '5'); 
  });
});
/*const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertArrayEquals = require('../assertArrayEqual');

assertArrayEquals(middle([1,2,3,4,5,6]), [3,4]);
*/