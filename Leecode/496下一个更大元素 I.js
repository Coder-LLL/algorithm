/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let map = new Map();
  let nums2Length = nums2.length;
  let stack = [];
  for (let i = 0; i < nums2Length; i++) {
    let tem = nums2[i];
    while (stack.length && tem > nums2[stack[stack.length - 1]]) {
      let index = stack.pop();
      console.log(index, i);
      map.set(nums2[index], nums2[i]);
    }
    stack.push(i);
  }
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    res.push(map.has(nums1[i]) ? map.get(nums1[i]) : -1);
  }
  return res;
};
let nums1 = [4, 1, 2];
let nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));
