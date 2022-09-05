/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  // let result = [];
  // let path = [];
  // const backTracking = (n, k, startIndex) => {
  //   let sum = path.reduce((a, b) => a + b, 0);
  //   if (path.length == k && sum == n) {
  //     result.push([...path]);
  //     return;
  //   }
  //   for (let i = startIndex; i <= 9; i++) {
  //     path.push(i);
  //     backTracking(n, k, i + 1);
  //     path.pop();
  //   }
  // };
  // backTracking(n, k, 1);
  // return result;

  let res = [];
  let path = [];
  function backTracking(startIndex) {
    let sum = path.reduce((sum, item) => {
      return sum + item;
    }, 0);
    if (path.length == k && sum == n) {
      res.push([...path]);
      return;
    }
    for (let i = startIndex; i <= 9; i++) {
      path.push(i);
      backTracking(i + 1);
      path.pop();
    }
  }
  backTracking(1);
  return res;
};
