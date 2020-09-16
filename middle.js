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

const middle = function(array){
  let middleArray = [];
  if(array.length === 1 || array.length === 2){
      return middleArray;
  }
  if(array.length %2 === 0){       
    middleArray.push(array[Math.floor(array.length/2)-1]);
    middleArray.push(array[Math.floor(array.length/2) ]);
} else if(array.length % 2 !== 0){ 
    middleArray.push(array[Math.floor(array.length/2)]);   
}

return middleArray;
}

middle([1, 2, 3, 4])
middle([1, 2, 3, 4, 5, 6]) ;
middle([1])
middle([1,2])