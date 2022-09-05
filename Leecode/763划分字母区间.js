/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let hash = {};
  // 统计出每个字符的最后位置
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = i;
  }
  console.log(hash);
  let result = [];
  let left = 0;
  let right = 0;
  for (let i = 0; i < s.length; i++) {
    right = Math.max(right, hash[s[i]]);
    if (right == i) {
      result.push(right - left + 1);
      left = i + 1;
    }
  }
  return result;
};
let S = "ababcbacadefegdehijhklij";
let res = partitionLabels(S);
console.log(res);
