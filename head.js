const assertEqual = function(actual, expected) {
 let num1 = actual;
 let num2 = expected;
 
  if(actual === expected){
   console.log(`✋Assertion passed: ${num1} === ${num2}`);
 }else if(actual !== expected){
   console.log(`✊Assertion Failed: ${num1} !=== ${num2}`);
 }
};
 const head = (array) => {
  if(array === []){
    return "undefined";
  }else{
    return array[0]
  }
 
};


 
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
