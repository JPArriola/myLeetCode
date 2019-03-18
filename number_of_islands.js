var numIslands = function (grid) {
  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        count++;
        dfs(row, col);
      }
    }
  }

  return count;

  function dfs(r, c) {
    if (r < 0 || r > grid.length - 1 || c < 0 || c > grid[0].length - 1 || grid[r][c] === "0") return;
    grid[r][c] = "0";
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  }
};