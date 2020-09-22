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

const without = function(source, itemsToRemove){
  let newArr = []; 
  for(let i = 0; i < source.length; i++){
      if(source[i] !== itemsToRemove[i]){
      newArr.push(source[i]);                                                                                                                            
      }                            
    }                                
  return newArr;
}

module.exports = without;