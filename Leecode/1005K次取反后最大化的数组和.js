/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  // 按照绝对值大小从大到小排序
  nums.sort((a, b) => {
    return Math.abs(b) - Math.abs(a);
  });
  // 把负数转为整数
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] = -nums[i];
      k--;
    }
  }

  if (k > 0 && k % 2 == 1) {
    nums[nums.length - 1] = -nums[nums.length - 1];
  }
  k = 0;
  return nums.reduce((sum, item) => {
    return sum + item;
  }, 0);
};
