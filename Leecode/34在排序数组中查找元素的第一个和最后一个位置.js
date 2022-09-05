/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const getLeftBorder = (nums, target) => {
    let left = 0,
      right = nums.length - 1;
    let leftBorder = -1;
    while (left <= right) {
      let middle = left + ((right - left) >> 1);
      if (nums[middle] >= target) {
        right = middle - 1;
        leftBorder = right;
      } else {
        left = middle + 1;
      }
    }
    return leftBorder;
  };
  const getRightBorder = (nums, target) => {
    let left = 0,
      right = nums.length - 1;
    let rightBorder = -1;
    while (left <= right) {
      let middle = left + ((right - left) >> 1);
      if (nums[middle] > target) {
        right = middle - 1;
      } else {
        left = middle + 1;
        rightBorder = left;
      }
    }
    return rightBorder;
  };

  let leftBorder = getLeftBorder(nums, target);
  let rightBorder = getRightBorder(nums, target);

  if (leftBorder == -1 || rightBorder == -1) return [-1, -1];
  if (rightBorder - leftBorder > 1) return [leftBorder + 1, rightBorder - 1];
  return [-1, -1];
};
