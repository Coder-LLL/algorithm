/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let sum = 0;
  let res = 0;
  function backTracking(index, nums, target) {
    if (index == nums.length && sum == target) {
      res++;
      return;
    }
    if (index == nums.length && sum != target) {
      return;
    }

    // 选择+的情况
    sum += nums[index];
    backTracking(index + 1, nums, target);
    sum -= nums[index];

    // 选择-的情况
    sum -= nums[index];
    backTracking(index + 1, nums, target);
    sum += nums[index];
  }
  backTracking(0, nums, target);
  return res;
};
