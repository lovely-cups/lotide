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

const letterPositions = function(sentence){
  const result = {};
  for(let i = 0; i < sentence.length; i++){
   if (result[sentence[i]]){
    result[sentence[i]].push(i);
   }else {
     result[sentence[i]] = [i];
   }
  }
  return result;
}

console.log(letterPositions("lighthouse in the house"));

