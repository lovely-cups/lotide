const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💥Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2){
  let result = false;
  if(arr1.length === arr2.length){
  for (let i = 0; i < arr1.length; i++){
    if(arr2[i] === arr1[i]) {
      result = true;
    }else {
      result = false;
    }
    }
  }
  return result;
}
assertEqual(eqArrays([1, 2, "3", 4], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false