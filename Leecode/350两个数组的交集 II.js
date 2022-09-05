/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function (nums1, nums2) {
//   let map1 = new Map();
//   let map2 = new Map();
//   let res = [];
//   for (let item of nums1) {
//     if (map1.has(item)) {
//       let res = map1.get(item);
//       map1.set(item, ++res);
//     } else {
//       map1.set(item, 1);
//     }
//   }
//   for (let item of nums2) {
//     if (map2.has(item)) {
//       let res = map2.get(item);
//       map2.set(item, ++res);
//     } else {
//       map2.set(item, 1);
//     }
//   }
//   for (let item of map1) {
//     if (map2.has(item[0])) {
//       let minNum = item[1] < map2.get(item[0]) ? item[1] : map2.get(item[0]);
//       for (let i = 0; i < minNum; i++) {
//         res.push(item[0]);
//       }
//     }
//   }

//   console.log(map1);
//   console.log(map2);
//   return res;
// };

var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => {
    return a - b;
  });
  nums2.sort((a, b) => {
    return a - b;
  });
  let res = [];
  let left = 0;
  let right = 0;
  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] < nums2[right]) {
      left++;
    } else if (nums1[left] > nums2[right]) {
      right++;
    } else if (nums1[left] == nums2[right]) {
      res.push(nums1[left]);
      left++;
      right++;
    }
  }
  return res;
};
let nums1 = [
  61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62, 35, 89, 5, 95, 12, 86,
  58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18, 89, 85, 7, 30, 67, 34,
  62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54, 44, 57, 46, 70, 60, 4, 63, 82, 42,
  65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92, 31, 43, 81, 88, 60, 10, 55,
  66, 82, 0, 79, 11, 81,
];
let nums2 = [
  5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15, 34, 92, 84,
  38, 85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44, 61, 48,
];
let res = intersect(nums1, nums2);
console.log(res);
