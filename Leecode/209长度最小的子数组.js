/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// 暴力解法
// var minSubArrayLen = function (target, nums) {
// let minLen = Number.MAX_SAFE_INTEGER;
// for (let i = 0; i < nums.length; i++) {
//   let sum = 0;
//   for (let j = i; j < nums.length; j++) {
//     sum += nums[j];
//     if (sum >= target && minLen > j - i + 1) {
//       minLen = j - i + 1;
//     }
//   }
// }
// // 当minLen为MAX_SAFE_INTEGER的时候 说明没有符合条件的子数组 此时返回0
// return minLen == Number.MAX_SAFE_INTEGER ? 0 : minLen;
// };

// 滑动窗口
var minSubArrayLen = function (target, nums) {
  let minLen = Number.MAX_SAFE_INTEGER;
  let leftIndex = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= target) {
      minLen = minLen < i - leftIndex + 1 ? minLen : i - leftIndex + 1;
      sum -= nums[leftIndex++];
    }
  }
  return minLen == Number.MAX_SAFE_INTEGER ? 0 : minLen;
  // let minLen = Number.MAX_SAFE_INTEGER;
  // let leftIndex = 0;
  // let sum = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   sum += nums[i];
  //   while (sum >= target) {
  //     minLen = minLen < i - leftIndex + 1 ? minLen : i - leftIndex + 1;
  //     sum -= nums[leftIndex++];
  //   }
  // }
  // return minLen == Number.MAX_SAFE_INTEGER ? 0 : minLen;
};

let target = 7;
let nums = [2, 3, 1, 2, 4, 3];
let res = minSubArrayLen(target, nums);
console.log(res);
