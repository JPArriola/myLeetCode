var setZeroes = function (matrix) {
  let zeroPositions = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (!matrix[i][j]) zeroPositions.push([i, j])
    }
  }

  while (zeroPositions.length) {
    let currPos = zeroPositions.shift();
    let [r, c] = currPos;
    matrix[r].forEach((el, i) => matrix[r][i] = 0);
    matrix.forEach((el, i) => matrix[i][c] = 0);
  }

  return matrix;
};