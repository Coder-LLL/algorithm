/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortedSquares = function (nums) {
//   let left = 0;
//   let right = nums.length - 1;
//   let ans = [];
//   // for (let i = 0; i < nums.length; i++) {
//   //   ans.push(0);
//   // }
//   while (left <= right) {
//     if (-nums[left] == nums[right]) {
//       ans.unshift(nums[left] * nums[left]);
//       left++;
//     } else if (-nums[left] < nums[right]) {
//       ans.unshift(nums[right] * nums[right]);
//       right--;
//     } else if (-nums[left] > nums[right]) {
//       ans.unshift(nums[left] * nums[left]);
//       left++;
//     }
//   }
//   return ans;
// };

var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let res = [];
  while (left <= right) {
    if (-nums[left] < nums[right]) {
      res.unshift(nums[right] ** 2);
      right--;
    } else if (-nums[left] >= nums[right]) {
      res.unshift(nums[left] ** 2);
      left++;
    }
  }
  return res;
};
let nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums));
