// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let counter = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    counter[char] = (counter[char] || 0) + 1;
  }

  for (let key in counter) {
    if (counter[key] > max) {
      max = counter[key];
      maxChar = key;
    }
  }
  return maxChar;
}

//Grider solution
// function maxChar(str) {
//   let counter = {};
//   let max = 0;
//   let maxChar = "";

//   for (let char of str) {
//     counter[char] = counter[char] + 1 || 1;
//   }
//   for (let key in counter) {
//     if (counter[key] > max) {
//       max = counter[key];
//       maxChar = key;
//     }
//   }
//   return maxChar;

// }

module.exports = maxChar;
