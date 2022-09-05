/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  function process(start, end, arr) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  k = k % nums.length;
  console.log(k);
  if (k) {
    process(0, nums.length - 1, nums);
    process(0, k - 1, nums);
    process(k, nums.length - 1, nums);
  }
};
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
rotate(nums, k);
console.log(nums);
