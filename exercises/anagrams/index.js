// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//SOLUTION 1:
// function anagrams(stringA, stringB) {
//   if (stringA === stringB) return true;
//   let cleanStrA = stringCounter(stringA);
//   let cleanStrB = stringCounter(stringB);

//   if (Object.keys(cleanStrA).length !== Object.keys(cleanStrB).length)
//     return false;

//   for (let key in cleanStrA) {
//     if (cleanStrA[key] !== cleanStrB[key]) return false;
//   }
//   return true;
// }
// //helper function to make our frequency counter
// function stringCounter(str) {
//   let obj = {};
//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     obj[char] = obj[char] + 1 || 1;
//   }
//   return obj;
// }

//SOLUTION 2:
function anagrams(stringA, stringB) {
  return stringCleaner(stringA) === stringCleaner(stringB);
}
//helper function to make our frequency counter
function stringCleaner(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;
