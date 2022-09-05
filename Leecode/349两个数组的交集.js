/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let res = [];
  for (let item of nums2) {
    if (set1.has(item) && !res.includes(item)) {
      res.push(item);
    }
  }
  return res;
};
let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
let res = intersection(nums1, nums2);
console.log(res);
