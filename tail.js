const assertEqual = function(actual, expected) {
  let num1 = actual;
  let num2 = expected;
  
   if(actual === expected){
    console.log(`✋Assertion passed: ${num1} === ${num2}`);
  }else if(actual !== expected){
    console.log(`✊Assertion Failed: ${num1} !=== ${num2}`);
  }
 };
  
 const tail = (words) => {
   let results = [];
   for (let i =0; i < words.length; i++){
     if (i > 0){
       results.push(words[i])
     }
   }
   return results;
 }
 //.slice()

const words = ["Yo Yo", "Lighthouse", "Labs"];
const arr = tail(words); 
assertEqual(arr.length, 3);