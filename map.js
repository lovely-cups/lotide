const eqArrays = function(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  for (let i = 0; i < arr1.length; i++){
    if(arr2[i] !== arr1[i]) {
      return false;
    }
    }
  return true;
}
const assertArrayEquals = function(arr1, arr2){
  console.log(arr1, arr2);
  if (eqArrays(arr1, arr2)) {
    console.log(`👍Assertion Passed `);
  } else {
    console.log(`💥Assertion Failed `);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback){

  const results = [];
  for (let item of array){
    results.push(callback(item));
  }
return results;
}
//const results1 = map(words, word => word[0]);
//console.log(results1);
module.exports = map;