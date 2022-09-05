// 动态规划
function process(cur, weights, values, n, maxWeight) {
  const length = values.length;
  dp = new Array(length).fill().map(() => {
    return new Array(maxWeight + 1).fill(0);
  });
  for (let j = weights[0]; j <= maxWeight; j++) {
    dp[0][j] = values[0];
  }
  for (let i = 1; i < length; i++) {
    for (let j = 0; j <= maxWeight; j++) {
      if (j < weights[i]) {
        // 不选
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          dp[i - 1][j - weights[i]] + values[i]
        );
      }
    }
  }
  return dp[length - 1][maxWeight];
}

// function process(cur, weights, values, n, maxWeight) {
//   // 没得可选了
//   if (cur == n) {
//     return 0;
//   }

//   // 情况一: 当前这个不选
//   let res1 = process(cur + 1, weights, values, n, maxWeight);
//   let res2 = -1;
//   if (maxWeight >= weights[cur]) {
//     res2 =
//       process(cur + 1, weights, values, n, maxWeight - weights[cur]) +
//       values[cur];
//   }
//   return Math.max(res1, res2);
// }
let n = 5;
let maxWeight = 10;
let weights = [1, 2, 3, 4, 5];
let values = [5, 4, 3, 2, 1];
let res = process(0, weights, values, n, maxWeight);
console.log(res);
