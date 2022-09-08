/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // 把大的转为nums1
  if (nums1 < nums2) {
    let tem = nums1;
    nums1 = nums2;
    nums2 = tem;
  }
  let set1 = new Set(nums1);
  let res = [];
  for (let i = 0; i < nums2.length; i++) {
    if (set1.has(nums2[i]) && !res.includes(nums2[i])) {
      res.push(nums2[i]);
    }
  }
  return res;
  //
  // let set1 = new Set(nums1);
  // let res = [];
  // for (let item of nums2) {
  //   if (set1.has(item) && !res.includes(item)) {
  //     res.push(item);
  //   }
  // }
  // return res;
};
let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
let res = intersection(nums1, nums2);
console.log(res);
