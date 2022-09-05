/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let res = 0; // res 为平衡字符串的数量
  let total = 0; // total为当前R和L字符的数量差
  for (let str of s) {
    total += str == "R" ? 1 : -1;
    if (total == 0) res++;
  }
  return res;
};
