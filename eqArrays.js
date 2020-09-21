
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

module.exports = eqArrays;