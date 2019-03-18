var islandPerimeter = function (grid) {
  let perimeter = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col]) {
        if (row - 1 < 0 || !grid[row - 1][col]) perimeter++;
        if (row + 1 === grid.length || !grid[row + 1][col]) perimeter++;
        if (col - 1 < 0 || !grid[row][col - 1]) perimeter++;
        if (col + 1 === grid[0].length || !grid[row][col + 1]) perimeter++;
      }
    }
  }
  return perimeter;
};