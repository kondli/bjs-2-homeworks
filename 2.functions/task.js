'use strict';

// Задание 1
function getArrayParams(arr) {
  let sum = 0;
  let min = arr[0];
  let max = arr[0];
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (min > arr[i]) {
      min = arr[i]
    }
    if (max < arr[i]) {
      max = arr[i]
    }
  }
   let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}


// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max  = 0;
  let s;
  for (let i = 0; i < arrOfArr.length; i++) {
    s = func(arrOfArr[i]);
    if (max < s) {
      max = s;
    }
  }
  return  max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i]
    }
    if (max < arr[i]) {
      max = arr[i]
    }
  }
  return Math.abs(max - min);
}