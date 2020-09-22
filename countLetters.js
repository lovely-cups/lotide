const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💥Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const countLetters = function(str){
const letterResult = {};
for (const num of str){
  if(letterResult[num]){
    letterResult[num] += 1;
  }else {
    letterResult[num] = 1
  }
}
return letterResult;
}


module.exports =countLetters;