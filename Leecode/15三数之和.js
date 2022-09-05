/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 双指针
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  let length = nums.length;
  nums.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < length; i++) {
    let left = i + 1;
    let right = length - 1;
    let iNum = nums[i];
    // 数组排过序，如果第一个数大于0直接返回res
    if (iNum > 0) {
      return;
    }
    if (nums[i - 1] == iNum) continue;

    while (left < right) {
      let leftNum = nums[left];
      let rightNum = nums[right];
      let sum = iNum + leftNum + rightNum;
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        res.push([iNum, leftNum, rightNum]);
        while (left < right && nums[left] == nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] == nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      }
    }
  }

  return res;
};

// 哈希表
// var threeSum = function (nums) {
// let twoSumMap = new Map();
// for (let i = 0; i < nums.length; i++) {
//   for (let j = 0; j < nums.length; j++) {
//     if (i == j) {
//       continue;
//     }
//     if (twoSumMap.has(nums[i] + nums[j])) {
//       let resList = twoSumMap.get(nums[i] + nums[j]);
//       resList.push([i, j]);
//       twoSumMap.set(nums[i] + nums[j], resList);
//     } else {
//       let resList = [];
//       resList.push([i, j]);
//       twoSumMap.set(nums[i] + nums[j], resList);
//     }
//   }
// }
// let count = [];
// for (let i = 0; i < nums.length; i++) {
//   if (twoSumMap.has(-nums[i])) {
//     let resList = twoSumMap.get(-nums[i]);
//     console.log(resList, -nums[i]);
//     for (let item of resList) {
//       console.log(item, i, !item.includes(i));
//       if (!item.includes(i)) {
//         let arr = [...item, i];
//         count.push(arr);
//       }
//     }
//   }
// }
// return count;
// };
nums = [-1, 0, 1, 2, -1, -4];
let res = threeSum(nums);
console.log(res);
