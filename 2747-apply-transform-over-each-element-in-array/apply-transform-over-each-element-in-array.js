/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function foo(arr, fn, counter = 0) {
   const returnedArray = [];
   for(let i = 0; i < arr.length; ++i) {
    returnedArray[i] = fn(arr[i], i);
   }
   return returnedArray;
};