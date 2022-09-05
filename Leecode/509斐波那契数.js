/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
var fib = function (n) {
  let dp = new Array(n);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
// 优化: 增加缓存 避免重复计算
// var fib = function (n) {
//   let map = new Map();
//   function process(n) {
//     if (map.has(n)) {
//       console.log(map.get(n), n);
//       return map.get(n);
//     }
//     // 递归终止的条件
//     if (n == 0) {
//       return 0;
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

// var fib = function (n) {
//   function process(n) {
//     // 递归终止的条件
//     if (n == 0) {
//       return 0;
//     }
//     if (n == 1) {
//       return 1;
//     }

//     return process(n - 1) + process(n - 2);
//   }

//   return process(n);
// };
let n = 5;
let res = fib(n);
console.log(res);
