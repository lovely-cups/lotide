const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertArrayEquals = require('../assertArrayEqual');

assertArrayEquals(middle([1,2,3,4,5,6]), [3,4]);