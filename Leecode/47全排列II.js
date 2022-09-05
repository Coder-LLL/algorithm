/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = [];
  const path = [];
  nums.sort((a, b) => {
    return a - b;
  });
  function backTracking(used) {
    if (path.length == nums.length) {
      res.push([...path]);
      return;
    }

    for (let j = 0; j < nums.length; j++) {
      if (j > 0 && nums[j] == nums[j - 1] && used[j - 1] == false) {
        continue;
      }
      if (!used[j]) {
        used[j] = true;
        path.push(nums[j]);
        backTracking(used);
        used[j] = false;
        path.pop();
      }
    }
  }

  backTracking([]);
  return res;
};
