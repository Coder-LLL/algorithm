/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let res = [];
  let path = [];
  function backTracking(startIndex) {
    if (path.length > 1) {
      res.push([...path]);
    }
    let useSet = [];
    for (let j = startIndex; j < nums.length; j++) {
      if (
        (path.length > 0 && nums[j] < path[path.length - 1]) ||
        useSet[nums[j] + 100]
      ) {
        continue;
      }

      useSet[nums[j] + 100] = true;
      path.push(nums[j]);
      backTracking(j + 1);
      path.pop();
    }
  }
  backTracking(0);
  return res;
};
let nums = [4, 6, 7, 7];
let res = findSubsequences(nums);
console.log(res);
