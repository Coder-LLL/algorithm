/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0]
  let currentSum
  for (let i = 0; i < nums.length; i++) {
    let currentList = nums.slice(i)
    currentList.reduce((prevSum, item) => {
      if (prevSum + item > max) {
        console.log(prevSum + item)
        max = prevSum + item
      }
      return prevSum + item
    }, 0)
  }
  return max
};
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums))