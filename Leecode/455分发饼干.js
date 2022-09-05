/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 对小孩的胃口和饼干数组进行排序
  g.sort((a, b) => {
    return a - b;
  });
  s.sort((a, b) => {
    return a - b;
  });
  let res = 0;
  let index = s.length - 1;
  for (let i = g.length - 1; i >= 0; i--) {
    if (s[index] >= g[i]) {
      res++;
      index--;
    }
  }

  return res;
};
