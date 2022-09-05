/**
 * @param {string} s
 * @return {string}
 */
// 暴力递归
// var longestPalindrome = function (s) {
// function helper(i, j) {
//   // 只剩一个
//   if (i == j) return true;
//   // 左右不相等 直接返回
//   if (s[i] != s[j]) return false;
//   // 只有两个元素 并且相等
//   if (i + 1 === j) return true;
//   return helper(i + 1, j - 1);
// }
// let [left, right] = [0, 1];
// let length = s.length;
// for (let i = 0; i < length - 1; i++) {
//   for (let j = length - 1; j > i; j--) {
//     if (helper(i, j) && j - i + 1 > right - left) {
//       left = i;
//       right = j + 1;
//     }
//   }
// }
// return s.slice(left, right);
// };
// 添加缓存
// var longestPalindrome = function (s) {
//   let [left, right] = [0, 1];
//   let length = s.length;
//   let dp = new Array(length).fill(0).map((item) => {
//     return new Array(length).fill(0);
//   });

//   function helper(i, j) {
//     if (dp[i][j] != 0) {
//       return dp[i][j];
//     }
//     // 只剩一个
//     if (i == j) {
//       return true;
//     }
//     // 左右不相等 直接返回
//     if (s[i] != s[j]) {
//       return false;
//     }
//     // 只有两个元素 并且相等
//     if (i + 1 === j) {
//       return true;
//     }

//     dp[i][j] = helper(i + 1, j - 1);
//     return dp[i][j];
//   }

//   for (let i = 0; i < length - 1; i++) {
//     for (let j = length - 1; j > i; j--) {
//       if (helper(i, j) && j - i + 1 > right - left) {
//         left = i;
//         right = j + 1;
//       }
//     }
//   }
//   return s.slice(left, right);
// };
// 动态规划
var longestPalindrome = function (s) {
  let [left, right] = [0, 1];
  let length = s.length;
  let dp = new Array(length).fill(0).map((item) => {
    return new Array(length).fill(0);
  });
  for (let i = 0; i < length; i++) {
    dp[i][i] = true;
  }
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] == s[j]) {
        if (j - i <= 1) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }
      if (dp[i][j] && j - i + 1 > right - left) {
        left = i;
        right = j + 1;
      }
    }
  }
  return s.slice(left, right);
};
let s = "babad";
let res = longestPalindrome(s);
console.log(res);
