const eqObjects = function(obj1, obj2){
  if(Object.keys(obj1).length !== Object.keys(obj2).length){
    return false;
  }
  for (const key in obj1){
    if(Array.isArray(obj1[key]) && Array.isArray(obj2[key])){
      if(!eqArrays(obj1[key], obj2[key])){
        return false;
      }

    //Hey use eqArrays
      
    }else {
      if (obj1[key] !== obj2[key]){
        return false;
      }
    }
  }
  return true;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = rquire('util).inspect;')
  if (actual === expected) {
    console.log(`👍Assertion Passed: ${inspect(actual)}`);
  } else {
    console.log(`💥Assertion Failed: ${inspect(expected)}`);
  }
};