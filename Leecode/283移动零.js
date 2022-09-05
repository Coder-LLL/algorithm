/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  function swap(arr, i, j) {
    if (i == j) return;
    arr[i] = arr[i] ^ arr[j];
    arr[j] = arr[i] ^ arr[j];
    arr[i] = arr[i] ^ arr[j];
  }
  let slowIndex = 0;
  let fastIndex = 0;
  while (fastIndex < nums.length) {
    if (nums[fastIndex]) {
      swap(nums, fastIndex, slowIndex);
      slowIndex++;
    }
    fastIndex++;
  }
};
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
