/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = nums.reduce((sum, cur) => {
    return sum + cur;
  });
  if (sum % 2 == 1) return false;
  const dp = new Array(nums.length).fill().map(() => {
    return new Array(sum / 2 + 1).fill(0);
  });
  for (let i = nums[0]; i < sum / 2 + 1; i++) {
    dp[0][i] = nums[0];
  }
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < sum / 2 + 1; j++) {
      if (j < nums[i]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - nums[i]] + nums[i]);
      }

      if (dp[i][j] == sum / 2) {
        console.log(dp);
        return true;
      }
    }
  }
  console.log(dp);
  return false;
};
let nums = [1, 5, 11, 5];
let res = canPartition(nums);
console.log(res);
