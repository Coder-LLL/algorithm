/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [];
  const path = [];
  function backTracking(startIndex) {
    res.push([...path]);
    for (let j = startIndex; j < nums.length; j++) {
      path.push(nums[j]);
      backTracking(j + 1);
      path.pop();
    }
  }

  backTracking(0);
  return res;
};

let nums = [1, 2, 3];
let res = subsets(nums);
console.log(res);
