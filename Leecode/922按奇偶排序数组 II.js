/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 方法三
var sortArrayByParityII = function (nums) {
  let oddIndex = 1;
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] % 2 == 1) {
      // 在偶数位遇到奇数
      while (nums[oddIndex] % 2 !== 0) {
        oddIndex += 2;
      }
      [nums[oddIndex], nums[i]] = [nums[i], nums[oddIndex]];
    }
  }
  return nums;
};

// 方法二
// var sortArrayByParityII = function (nums) {
//   let length = nums.length;
//   let oddIndex = 1,
//     evenIndex = 0;
//   let res = new Array(length).fill(0);
//   for (let i = 0; i < length; i++) {
//     if (nums[i] % 2 == 0) {
//       res[evenIndex] = nums[i];
//       evenIndex += 2;
//     } else {
//       res[oddIndex] = nums[i];
//       oddIndex += 2;
//     }
//   }
//   return res;
// };

// 方法一
// var sortArrayByParityII = function (nums) {
//   let length = nums.length;
//   const even = new Array(Math.floor(length / 2));
//   const odd = new Array(Math.floor(length / 2));
//   let evenIndex = 0,
//     oddIndex = 0;
//   for (let i = 0; i < length; i++) {
//     if (nums[i] % 2 == 0) {
//       even[evenIndex++] = nums[i];
//     } else {
//       odd[oddIndex++] = nums[i];
//     }
//   }
//   let index = 0;
//   for (let i = 0; i < even.length; i++) {
//     nums[index++] = even[i];
//     nums[index++] = odd[i];
//   }
//   return nums;
// };
