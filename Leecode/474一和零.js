/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const dp = new Array(m + 1).fill().map(() => {
    return new Array(n + 1).fill(0);
  });
  let numOfZeros, numOfOnes;
  for (let str of strs) {
    numOfZeros = 0;
    numOfOnes = 0;

    for (let s of str) {
      if (s == "0") {
        numOfZeros++;
      } else {
        numOfOnes++;
      }
    }
    for (let i = m; i >= numOfZeros; i--) {
      for (let j = n; j >= numOfOnes; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - numOfZeros][j - numOfOnes] + 1);
      }
    }
    // for (i = numOfZeros; i <= m; i++) {
    //   for (let j = numOfOnes; j <= n; j++) {
    //     dp[i][j] = Math.max(dp[i][j], dp[i - numOfZeros][j - numOfOnes] + 1);
    //   }
    // }
  }
  console.log(dp);
  return dp[m][n];
};

let strs = ["10", "0001", "111001", "1", "0"];
let m = 5;
let n = 3;
let res = findMaxForm(strs, m, n);
console.log(res);
