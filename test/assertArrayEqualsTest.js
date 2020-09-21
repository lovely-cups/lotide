const eqArrays = require('../eqArrays');
const assertArrayEquals = require('../assertArrayEqual');

assertArrayEquals([1, 2, "3", 4], [1, 2, 3]);
assertArrayEquals([1, 2, 3], [1, 2, 3]);