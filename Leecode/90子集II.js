/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const res = [];
  const path = [];
  nums.sort((a, b) => {
    return a - b;
  });

  function backTracking(index) {
    res.push([...path]);
    if (index > nums.length - 1) {
      return;
    }
    for (let j = index; j < nums.length; j++) {
      if (j > index && nums[j] == nums[j - 1]) {
        continue;
      }
      path.push(nums[j]);
      backTracking(j + 1);
      path.pop();
    }
  }
  backTracking(0);
  return res;
};
