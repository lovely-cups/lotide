const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💥Assertion Failed: ${actual} !=== ${expected}`);
  }
};

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
const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
const ac = {a: "1", b: "4"};
const abc = {a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(ab, ac), false);
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);