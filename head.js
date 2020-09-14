const assertEqual = function(actual, expected) {
  
 };
 let head = function(array ,n){
  if(array === []){
    return "undefined";
  }else{
    return array.slice(0, n);
  }
 
};
 


 
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
