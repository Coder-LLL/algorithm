/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  const path = [];
  function backTracking(used) {
    if (path.length == nums.length) {
      res.push([...path]);
      return;
    }
    for (let j = 0; j < nums.length; j++) {
      if (used[j]) {
        continue;
      }
      path.push(nums[j]);
      used[j] = true;
      backTracking(used);
      path.pop();
      used[j] = false;
    }
  }

  backTracking([]);
  return res;
};
let nums = [1, 2, 3, 4];
let res = permute(nums);
console.log(res);
