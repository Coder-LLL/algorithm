/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// var combine = function (n, k) {
//   let result = [];
//   let path = [];
//   const combineHelper = (n, k, startIndex) => {
//     if (path.length === k) {
//       result.push([...path]);
//       return;
//     }
//     for (let i = startIndex; i <= n; i++) {
//       path.push(i);
//       combineHelper(n, k, i + 1);
//       path.pop();
//     }
//   };
//   combineHelper(n, k, 1);

//   return result;
// };
// var combine = function (n, k) {
//   let result = [];
//   let path = [];
//   const backTracking = (n, k, startIndex) => {
//     let length = path.length;
//     if (path.length == k) {
//       result.push([...path]);
//       return;
//     }
//     //  length是当前以及选择了的元素个数 k-length是还需要选择的
//     for (let i = startIndex; i <= n - (k - length) + 1; i++) {
//       // 当前选择
//       path.push(i);
//       // 递归
//       backTracking(n, k, i + 1);
//       // 回溯 清除当前选择
//       path.pop();
//     }
//   };
//   backTracking(n, k, 1);
//   return result;
// };
var combine = function (n, k) {
  let res = [];
  let path = [];
  function backTracking(startIndex, n, k) {
    if (path.length == k) {
      res.push([...path]);
      return;
    }

    for (let i = startIndex; i <= n; i++) {
      path.push(i);
      backTracking(i + 1, n, k);
      path.pop();
    }
  }

  backTracking(1, n, k);

  return res;
};
