/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = nums.reduce((prev, cur) => {
    return prev + cur;
  }, 0);
  let leftSum = 0,
    rightSum = 0;
  for (let i = 0; i < nums.length; i++) {
    leftSum += nums[i];
    rightSum = sum - leftSum + nums[i];
    if (leftSum === rightSum) return i;
  }
  return -1;
  // const sum = nums.reduce((a, b) => a + b); //求和
  // // 中心索引左半和 中心索引右半和
  // let leftSum = 0,
  //   rightSum = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   leftSum += nums[i];
  //   rightSum = sum - leftSum + nums[i]; // leftSum 里面已经有 nums[i]，多减了一次，所以加上
  //   if (leftSum === rightSum) return i;
  // }
  // return -1;
};
let nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));
