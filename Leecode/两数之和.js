/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 方法一
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
//   return []
// };



// 方法二 使用数组的 indexof
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     let check = target - nums[i]
//     let res1 = i
//     // 从 i+1 的位置开始搜索
//     let res2 = nums.indexOf(check, i + 1)
//     if (res2 !== -1) {
//       return [res1, res2]
//     }
//   }
//   return []
// };


// 方法三
var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else {
      map.set(nums[i], i)
    }
  }
  return []
};


let nums = [3, 2, 4]
let target = 6
console.log(twoSum(nums, target))