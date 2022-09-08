/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let res = [];
  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      res.unshift(nums[left] * nums[left]);
      left++;
    } else if (Math.abs(nums[left]) <= Math.abs(nums[right])) {
      res.unshift(nums[right] * nums[right]);
      right--;
    }
  }
  return res;
  // let left = 0;
  // let right = nums.length - 1;
  // let res = [];
  // while (left <= right) {
  //   if (-nums[left] < nums[right]) {
  //     res.unshift(nums[right] ** 2);
  //     right--;
  //   } else if (-nums[left] >= nums[right]) {
  //     res.unshift(nums[left] ** 2);
  //     left++;
  //   }
  // }
  // return res;
};
// var sortedSquares = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = nums[i] * nums[i];
//   }
//   nums.sort((a, b) => {
//     return a - b;
//   });
//   return nums;
// };
let nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums));
