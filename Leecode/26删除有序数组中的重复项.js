/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力循环法
// var removeDuplicates = function (nums) {
//   let totalNums = nums.length;
//   for (let i = 1; i < totalNums; i++) {
//     if (nums[i - 1] == nums[i]) {
//       totalNums--;
//       for (let j = i; j < nums.length; j++) {
//         nums[j - 1] = nums[j];
//       }
//       i--;
//     }
//   }
//   return totalNums;
// };

// 双指针法
var removeDuplicates = function (nums) {
  let slowIndex = 0;
  for (let fastIndex = 1; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] != nums[slowIndex]) {
      nums[++slowIndex] = nums[fastIndex];
    }
  }
  return slowIndex + 1;
};
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let res = removeDuplicates(nums);
console.log(res);
