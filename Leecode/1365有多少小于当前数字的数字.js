/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let temArr = [...nums];
  let map = new Map();
  temArr.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < temArr.length; i++) {
    if (!map.has(temArr[i])) {
      map.set(temArr[i], i);
    }
  }
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    res[i] = map.get(nums[i]);
  }
  return res;
};
let nums = [8, 1, 2, 2, 3];
console.log(smallerNumbersThanCurrent(nums));
