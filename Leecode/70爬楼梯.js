/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
var climbStairs = function (n) {
  let dp = new Array(n);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

// 加缓存优化
// var climbStairs = function (n) {
//   let map = new Map();
//   function process(n) {
//     if (map.has(n)) {
//       return map.get(n);
//     }
//     // 递归终止条件
//     if (n == 2) {
//       return 2;
//     }
//     if (n == 1) {
//       return 1;
//     }
//     let res1 = process(n - 1);
//     let res2 = process(n - 2);
//     let res = res1 + res2;
//     map.set(n, res);
//     return res;
//   }

//   return process(n);
// };

// 递归
// var climbStairs = function (n) {
//   function process(n) {
//     // 递归终止条件
//     if (n == 2) {
//       return 2;
//     }
//     if (n == 1) {
//       return 1;
//     }

//     return process(n - 1) + process(n - 2);
//   }

//   return process(n);
// };
let n = 3;
let res = climbStairs(n);
console.log(res);
