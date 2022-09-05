/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 动态规划
var uniquePaths = function (m, n) {
  let dp = new Array(m).fill(0).map((item) => {
    return new Array(n).fill(-1);
  });
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};

// 增加缓存优化
// var uniquePaths = function (m, n) {
//   let map = new Array(m).fill(0).map((item) => {
//     return new Array(n).fill(-1);
//   });
//   function process(i, j) {
//     if (map[i][j] != -1) {
//       return map[i][j];
//     }
//     if (i == 0 && j == 0) {
//       return 1;
//     }
//     if (i == 0) {
//       return process(i, j - 1);
//     }
//     if (j == 0) {
//       return process(i - 1, j);
//     }
//     let res1 = process(i, j - 1);
//     let res2 = process(i - 1, j);
//     let res = res1 + res2;
//     map[i][j] = res;
//     return res;
//   }
//   return process(m - 1, n - 1);
// };

// 递归
// var uniquePaths = function (m, n) {
//   function process(i, j) {
//     if (i == 0 && j == 0) {
//       return 1;
//     }
//     if (i == 0) {
//       return process(i, j - 1);
//     }
//     if (j == 0) {
//       return process(i - 1, j);
//     }
//     let res1 = process(i, j - 1);
//     let res2 = process(i - 1, j);
//     let res = res1 + res2;
//     console.log(res, i, j);
//     return res;
//   }
//   return process(m - 1, n - 1);
// };
let n = 7,
  m = 3;
let res = uniquePaths(m, n);
console.log(res);
