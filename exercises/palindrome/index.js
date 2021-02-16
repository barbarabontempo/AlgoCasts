// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// grider solution 1:
// function palindrome(str) {
//   let revStr = str.split("").reverse().join("");
//   return str === revStr
// }

//grider solution 2:
//the every function does a boolean check on every item in the array
function palindrome(str) {
  return str.split("").every((char, index) => {
    return char === str[str.length - index - 1];
  });
}

module.exports = palindrome;
