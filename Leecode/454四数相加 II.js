/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let twoSum = new Map();
  for (let i = 0; i < nums1.length; i++) {
    for (j = 0; j < nums2.length; j++) {
      if (twoSum.has(nums1[i] + nums2[j])) {
        let count = twoSum.get(nums1[i] + nums2[j]);
        twoSum.set;
      } else {
      }
    }
  }
  //
  // let twoSumMap = new Map();
  // for (let i = 0; i < nums1.length; i++) {
  //   for (let j = 0; j < nums2.length; j++) {
  //     if (twoSumMap.has(nums1[i] + nums2[j])) {
  //       let count = twoSumMap.get(nums1[i] + nums2[j]);
  //       twoSumMap.set(nums1[i] + nums2[j], count + 1);
  //     } else {
  //       twoSumMap.set(nums1[i] + nums2[j], 1);
  //     }
  //   }
  // }
  // let res = 0;
  // for (let i = 0; i < nums3.length; i++) {
  //   for (let j = 0; j < nums4.length; j++) {
  //     if (twoSumMap.has(-(nums3[i] + nums4[j]))) {
  //       res += twoSumMap.get(-(nums3[i] + nums4[j]));
  //     }
  //   }
  // }
  // return res;
};
