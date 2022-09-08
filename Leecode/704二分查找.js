/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // let Left = 0;
  // let Right = nums.length - 1;
  // let ans = -1;
  // while (Left <= Right) {
  //   let mid = Math.floor((Left + Right) / 2);
  //   if (nums[mid] == target) {
  //     ans = mid;
  //     break;
  //   } else if (nums[mid] < target) {
  //     Left = mid + 1;
  //   } else if (nums[mid] > target) {
  //     Right = mid - 1;
  //   }
  // }
  // return ans;
};

// var search = function (nums, target) {
//   function traverse(left, right) {
//     let mid = left + parseInt((right - left) >> 1);
//     if (left > right) return -1;
//     if (nums[mid] < target) {
//       return traverse(mid + 1, right);
//     } else if (nums[mid] == target) {
//       return mid;
//     } else {
//       return traverse(left, mid - 1);
//     }
//   }
//   return traverse(0, nums.length - 1);
// };
let nums = [-1, 0, 3, 5, 9, 12];
let target = 12;
let res = search(nums, target);
console.log(res);
