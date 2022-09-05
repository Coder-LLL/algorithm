/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let length = nums.length;
  let stack = [];
  let res = new Array(length).fill(-1);
  for (let i = 0; i < length * 2; i++) {
    let tem = nums[i % length];
    while (stack.length && tem > nums[stack[stack.length - 1]]) {
      let index = stack.pop();
      res[index] = nums[i % length];
    }
    stack.push(i % length);
  }
  return res;
};
let nums = [1, 2, 1];
console.log(nextGreaterElements(nums));
