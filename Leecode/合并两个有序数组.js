"use strict";

// function merge(nums1, m, nums2, n) {
// if (!nums2.length || !n) return;

// for (let i = m; i < m + n; i++) {
//     nums1[i] = nums2.shift();
// }

// // 升序排列
// nums1.sort((a, b) => a - b);
// }





// 正向双指针
var merge = function (nums1, m, nums2, n) {
    let p1 = 0
    let p2 = 0
    var cur;
    let sorted = [];
    while (p1 < m || p2 < n) {
        if (p1 === m) {
            cur = nums2[p2++]
        } else if (p2 === n) {
            cur = nums1[p1++]
        } else if (nums1[p1] < nums2[p2]) {
            cur = nums1[p1++]
        } else {
            cur = nums2[p2++]
        }
        sorted.push(cur)
    }
    sorted = sorted.sort((a, b) => {
        return a - b
    })
    console.log(sorted)
}
let nums1 = [1]
let m = 0
let nums2 = [1]
let n = 1
merge(nums1, m, nums2, n)