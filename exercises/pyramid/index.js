// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   let midpoint = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let pyramid = "";
//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (midpoint - row <= col && midpoint + row >= col) {
//         pyramid += "#";
//       } else {
//         pyramid += " ";
//       }
//     }
//     console.log(pyramid);
//   }
// }

function pyramid(n, row = 0, pyramidStr = "") {
  if (n === row) {
    return;
  }

  if (pyramidStr.length === 2 * n - 1) {
    console.log(pyramidStr);
    return pyramid(n, row + 1);
  }

  let midpoint = Math.floor((2 * n - 1) / 2);
  if (
    midpoint - row <= pyramidStr.length &&
    midpoint + row >= pyramidStr.length
  ) {
    pyramidStr += "#";
  } else {
    pyramidStr += " ";
  }

  pyramid(n, row, pyramidStr);
}

module.exports = pyramid;
