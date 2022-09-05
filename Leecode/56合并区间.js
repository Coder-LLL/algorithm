/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 按左侧从小到大排序
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  let res = [];
  let prev = intervals[0];
  for (let i = 0; i < intervals.length; i++) {
    let cur = intervals[i];
    if (cur[0] > prev[1]) {
      res.push(prev);
      prev = cur;
    } else {
      prev[1] = Math.max(cur[1], prev[1]);
    }
  }

  res.push(prev);
  return res;
};
