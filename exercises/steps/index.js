// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     //from 0-n iterate through rows
//   for (let i = 0; i < n; i++) {
//     let stair = "";
//     for (let j = 0; j < n; j++) {
//       if (j <= i) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }

//recursive solution
function steps(n, row = 0, stair = "") {
  //base case, if n is 0, then we stop
  if (n === row) {
    return;
  }

  if (stair.length === n) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair);
}

module.exports = steps;
