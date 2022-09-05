/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 暴力循环
var removeElement = function (nums, val) {
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    if (nums[i] == val) {
      for (let j = i; j < length; j++) {
        nums[j] = nums[j + 1];
      }
      i--;
      length--;
    }
  }
  return length;
  // let totalNum = nums.length;
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] == val) {
  //     totalNum--;
  //     for (let j = i; j < nums.length; j++) {
  //       nums[j] = nums[j + 1];
  //     }
  //     i--;
  //   }
  // }
  // return totalNum;
};

// var removeElement = function (nums, val) {
//   let slowIndex = 0;
//   for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
//     if (nums[fastIndex] != val) {
//       nums[slowIndex++] = nums[fastIndex];
//     }
//   }
//   return slowIndex;
// };

// var removeElement = function (nums, val) {
//   let slowIndex = 0;
//   let fastIndex = 0;
//   while (fastIndex < nums.length) {
//     if (nums[fastIndex] != val) {
//       nums[slowIndex] = nums[fastIndex];
//       slowIndex++;
//     }
//     fastIndex++;
//   }
//   return slowIndex;
// };
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;
let res = removeElement(nums, val);
console.log(res);
