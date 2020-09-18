const takeUntil = function(array, callback){
  for (let index in array){
    if(callback(array[index]))
    array.splice(index);
 
  }
  return array;

}
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


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

assertArrayEquals(results1, [1, 2, 5, 7, 2]);
/*const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback){

  const results = [];
  for (let item of array){
    results.push(callback(item));
  }
return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);
*/