/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
// 方法一
// var compareVersion = function (version1, version2) {
//   const v1 = version1.split('.');
//   const v2 = version2.split('.');
//   for (let i = 0; i < v1.length || i < v2.length; ++i) {
//     let x = 0,
//       y = 0;
//     if (i < v1.length) {
//       x = parseInt(v1[i]);
//     }
//     if (i < v2.length) {
//       y = parseInt(v2[i]);
//     }
//     if (x > y) {
//       return 1;
//     }
//     if (x < y) {
//       return -1;
//     }
//   }
//   return 0;

// };

// 方法二
var compareVersion = function (version1, version2) {
  version1 = version1.split('.');
  version2 = version2.split('.');
  let n = Math.max(version1.length, version2.length)
  for (let i = 0; i < n; i++) {
    let code1 = (version1[i] === undefined) ? 0 : parseInt(version1[i]);
    let code2 = (version2[i] === undefined) ? 0 : parseInt(version2[i]);
    if (code1 > code2) {
      return 1
    } else if (code1 < code2) {
      return -1
    }
  }
  return 0;
};