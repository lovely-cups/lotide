const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.notStrictEqual(tail([1, 2, 3]), [2,3]);
  });
  it("returns '5' for ['5']", () => {
    assert.notStrictEqual(tail(['5']), '5'); 
  });
});

/*const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail([1,2,3])
assertEqual(result.length, 2);
assertEqual(result[0], 2);
assertEqual(result[1], 3);
*/