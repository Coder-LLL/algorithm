/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  // 按右边界排序
  intervals.sort((a, b) => {
    return a[1] - b[1];
  });
  let count = 1;
  let end = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i];
    if (interval[0] >= end) {
      count++;
      end = interval[1];
    }
  }

  return intervals.length - count;
};
