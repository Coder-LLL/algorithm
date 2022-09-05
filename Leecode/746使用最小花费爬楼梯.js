/**
 * @param {number[]} cost
 * @return {number}
 */

// 动态规划
var minCostClimbingStairs = function (cost) {
  let dp = new Array(cost.length);
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i]);
  }
  console.log(dp);
  return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
};
// 增加缓存优化
// var minCostClimbingStairs = function (cost) {
//   let map = new Map();
//   function process(n) {
//     if (map.has(n)) {
//       return map.get(n);
//     }
//     // 递归终止条件
//     if (n == 0) {
//       return cost[0];
//     }
//     if (n == 1) {
//       return cost[1];
//     }
//     let res1 = process(n - 1);
//     let res2 = process(n - 2);
//     let res = Math.min(res1, res2) + cost[n];
//     map.set(n, res);
//     return res;
//   }
//   return Math.min(process(cost.length - 1), process(cost.length - 2));
// };
// 递归
// var minCostClimbingStairs = function (cost) {
//   function process(n) {
//     // 递归终止条件
//     if (n == 0) {
//       return cost[0];
//     }
//     if (n == 1) {
//       return cost[1];
//     }
//     let res1 = process(n - 1);
//     let res2 = process(n - 2);
//     // console.log(res1, res2, n);
//     let res = Math.min(res1, res2) + cost[n];
//     console.log(res1, res2, res, n);
//     return res;
//   }
//   // cost[cost.length] = 0;
//   return Math.min(process(cost.length - 1), process(cost.length - 2));
// };
let n = [10, 15, 20];
let res = minCostClimbingStairs(n);
console.log(res);
