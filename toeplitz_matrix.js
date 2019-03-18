var isToeplitzMatrix = function (matrix) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (r + 1 === matrix.length || c + 1 === matrix[0].length ||
        matrix[r][c] === matrix[r + 1][c + 1]) {
        continue;
      } else {
        return false;
      }
    }
  }

  return true;
};