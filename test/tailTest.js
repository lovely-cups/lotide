const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail([1,2,3])
assertEqual(result.length, 2);
assertEqual(result[0], 2);
assertEqual(result[1], 3);
