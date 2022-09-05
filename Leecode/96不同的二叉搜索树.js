/**
 * @param {number} n
 * @return {number}
 */

var numTrees = function (n) {
  let dp = new Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    let sum = 0;
    for (let j = 1; j <= i; j++) {
      sum += dp[j - 1] * dp[i - j];
    }

    dp[i] = sum;
  }
  return dp[n];
};
// 递归
// var numTrees = function (n) {
//   function process(n) {
//     if (n == 0 || n == 1) {
//       return 1;
//     }
//     let num = 0;
//     for (let i = 0; i <= n - 1; i++) {
//       num += process(i) * process(n - i - 1);
//     }
//     return num;
//   }

//   return process(n);
// };
let n = 3;
let res = numTrees(n);
console.log(res);
