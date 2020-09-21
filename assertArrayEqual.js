const eqArrays = require('./eqArrays');

const assertArrayEquals = function(arr1, arr2){
  console.log(arr1, arr2);
  if (eqArrays(arr1, arr2)) {
    console.log(`👍Assertion Passed `);
  } else {
    console.log(`💥Assertion Failed `);
  }
};


module.exports = assertArrayEquals;