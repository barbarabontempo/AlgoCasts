// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//my solution:
// function reverse(str) {
//   let reversedStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }
//   return reversedStr;
// }
//  HE SAID TO NOT USE THE FOR LOOP I USED ABOVE, AND IF POSSIBLE TO USE FOR OF INSTEAD

//Grider solution 1:
// function reverse(str) {
//     //use split to take the string and turn it into an array
//   let strArr = str.split(""); //["h", "e", "l", "l", "o"]
//   //use the reverse method to reverse everything inside the array
//   strArr.reverse(); //["o", "l", "l", "e", "h"]
//   return strArr.join(""); //use join to return a new string by concatenating all elements in array
// }

//Grider solution 2:
// function reverse(str) {
//   let reversed = "";

//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

//Grider solution 3:
function reverse(str) {
  let arr = str.split(""); //turn into an array
  return arr.reduce((reversed, char) => {
    //you can chain reduce after split
    //take all values within arr and condense them down to a single reversed string value
    return char + reversed;
  }, ""); //the starting argument is an empty string
}

//when reduce runs it takes the start arg "", passes into the arrow function as the first argument, and whatever gets returned from inner function, will then be used as the starting argument for every sucsessive run of the function

module.exports = reverse;
