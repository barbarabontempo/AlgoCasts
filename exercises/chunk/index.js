// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   //create an empty array
//   let results = [];

//   //iterate through given array

//   for (let i = 0; i < array.length; i++) {
//     //for each element retrieve the last element in results
//     let last = results[results.length - 1];
//     //if last does not exist or if last.length === size,
//     if (!last || last.length === size) {
//       //push a new chunk into results with the current element
//       console.log("check", array[i]);
//       results.push([array[i]]); //push as an element inside an array
//     } else {
//       //else add the current element into last chunk
//       last.push(array[i]);
//     }
//   }
//   return results;
// }

function chunk(array, size) {
  let results = [];

  //iterate entire array
  for (let i = 0; i < array.length; ) {
    results.push(array.slice(i, size + i));
    i = i + size;
  }
  return results;
}

module.exports = chunk;
