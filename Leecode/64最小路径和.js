/**
 * @param {number[][]} grid
 * @return {number}
 */
// 纯递归版 无优化
// var minPathSum = function (grid) {
//   if (!grid) return;
//   let xLength = grid.length - 1;
//   let yLength = grid[grid.length - 1].length - 1;
//   function dp(x, y) {
//     if (x < 0 || y < 0 || x > xLength || y > yLength) {
//       return Number.MAX_SAFE_INTEGER;
//     }
//     if (x == 0 && y == 0) {
//       return grid[0][0];
//     }
//     return Math.min(dp(x - 1, y), dp(x, y - 1)) + grid[x][y];
//   }
//   return dp(xLength, yLength);
// };

// 优化一 添加缓存优化
// var minPathSum = function (grid) {
//   if (!grid) return;
//   let xLength = grid.length - 1;
//   let yLength = grid[grid.length - 1].length - 1;
//   let map = [];
//   for (let i = 0; i <= xLength; i++) {
//     let preLayer = [];
//     for (let j = 0; j <= yLength; j++) {
//       preLayer.push(-1);
//     }
//     map.push(preLayer);
//   }
//   function dp(x, y) {
//     if (x < 0 || y < 0 || x > xLength || y > yLength) {
//       return Number.MAX_SAFE_INTEGER;
//     }
//     if (map[x][y] != -1) {
//       return map[x][y];
//     }
//     let ans = 0;
//     if (x == 0 && y == 0) {
//       ans = grid[0][0];
//     } else {
//       ans = Math.min(dp(x - 1, y), dp(x, y - 1)) + grid[x][y];
//     }
//     map[x][y] = ans;
//     return ans;
//   }
//   return dp(xLength, yLength);
// };

// 优化二
var minPathSum = function (grid) {
  if (!grid) return;
  let xLength = grid.length - 1;
  let yLength = grid[grid.length - 1].length - 1;
  let map = [];
  for (let i = 0; i <= xLength; i++) {
    let preLayer = [];
    for (let j = 0; j <= yLength; j++) {
      preLayer.push(-1);
    }
    map.push(preLayer);
  }
  for (let i = 0; i <= xLength; i++) {
    for (let j = 0; j <= yLength; j++) {
      if (i == 0 && j == 0) {
        map[i][j] = grid[i][j];
      } else if (j == 0 && i != 0) {
        map[i][0] = map[i - 1][0] + grid[i][0];
      } else if (j != 0 && i == 0) {
        map[0][j] = map[0][j - 1] + grid[0][j];
      } else {
        map[i][j] = Math.min(map[i - 1][j], map[i][j - 1]) + grid[i][j];
      }
    }
  }
  return map[xLength][yLength];
};

let grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];
let res = minPathSum(grid);
console.log(res);
