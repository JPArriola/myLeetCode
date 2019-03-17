// var rotate = function(matrix) {
//   matrix.reverse();
//   for (let row = 0; row < matrix.length; row++){
//     for (let col = row; col < matrix.length; col++){
//       [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]]
//     }
//   }
// };

var rotate = function (matrix) {
  let n = matrix.length;
  let end = n - 1;

  for (let row = 0; row < Math.floor(n / 2); row++) {
    for (let col = row; col < end - row; col++) {
      let temp = matrix[row][col];
      matrix[row][col] = matrix[end - col][row];
      matrix[end - col][row] = matrix[end - row][end - col];
      matrix[end - row][end - col] = matrix[col][end - row];
      matrix[col][end - row] = temp;
    }
  }
};