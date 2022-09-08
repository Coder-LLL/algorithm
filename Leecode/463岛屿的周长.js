/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  // 上下左右4个方向
  const dirx = [-1, 1, 0, 0],
    diry = [0, 0, -1, 1];
  let m = grid.length;
  let n = grid[0].length;
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        for (let k = 0; k < 4; k++) {
          let x = i + dirx[k];
          let y = j + diry[k];
          if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === 0) {
            res++;
            continue;
          }
        }
      }
    }
  }
  return res;
};
