"use strict";
function compareArrays(arr1, arr2) {
  debugger;
  let result = arr1.length === arr2.length && arr1.every((elem, i) => arr1[i] === arr2[i]);
  
  return result; // boolean
}

function advancedFilter(arr) {
  let result = arr.filter((item) => item > 0).filter((item) => item % 3 === 0).map((item) => item * 10);
  
  // Ваш код

  return result; // array
}
