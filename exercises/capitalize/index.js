// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  //split input string by spaces to get an array
  let strArr = str.split(" ");
  //create an empty array for our results
  let result = [];

  //iterate through the strArr and for each word in the array
  for (let word of strArr) {
    //uppercase the first letter, join first letter with rest of the string, and push into results
    result.push(word[0].toUpperCase() + word.slice(1));
  }
  //return results, but we want a string so don't forget to join(" ")
  return result.join(" ");
}

// function capitalize(str) {
//   //create result which is the first character of the input string capitalized
//   let result = str[0].toUpperCase();
//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === " ") {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }

module.exports = capitalize;
