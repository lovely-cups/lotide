const assertEqual = function(actual, expected) {
 let num1 = actual;
 let num2 = expected;
 
  if(actual === expected){
   console.log("✋Assertion passed: " + num1 + " === " + num2);
 }else if(actual !== expected){
   console.log("✊Assertion Failed: " +  num1 + " !=== " + num2);
 }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
