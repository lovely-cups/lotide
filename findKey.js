const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log(`✋Assertion passed: ${actual} === ${expected}`);
  }else {
    console.log(`✊Assertion Failed: ${actual} !=== ${expected}`);
  }
 };

 const findKey = function(obj, callback){
   for(key in obj){
     if (callback(obj[key])){
      return key;
    } 
 }
}


 
/*findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)

assertEqual(findKey(obj, key), true);
*/
module.exports = findKey;