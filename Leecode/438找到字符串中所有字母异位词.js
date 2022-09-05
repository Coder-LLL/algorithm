/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// 超时
// var findAnagrams = function (s, p) {
//   let res = [];
//   let length = p.length;
//   let temArr = Array.from(p);
//   temArr.sort();
//   let pSortedStr = temArr.toString();
//   for (let i = 0; i < s.length - length + 1; i++) {
//     let subStr = s.substring(i, i + length);
//     let temArr = Array.from(subStr);
//     temArr.sort();
//     let sortedStr = temArr.toString();
//     if (sortedStr == pSortedStr) {
//       res.push(i);
//     }
//   }
//   return res;
// };

var findAnagrams = function (s, p) {
  const sLen = s.length;
  const pLen = p.length;
  if (sLen < pLen) return [];
  let ans = [];

  const sCount = new Array(26).fill(0);
  const pCount = new Array(26).fill(0);
  for (let i = 0; i < pLen; i++) {
    ++sCount[s[i].charCodeAt() - "a".charCodeAt()];
    ++pCount[p[i].charCodeAt() - "a".charCodeAt()];
  }

  if (sCount.toString() == pCount.toString()) {
    ans.push(0);
  }
  for (let i = 0; i < sLen - pLen; i++) {
    sCount[s[i].charCodeAt() - "a".charCodeAt()]--;
    sCount[s[i + pLen].charCodeAt() - "a".charCodeAt()]++;

    if (sCount.toString() == pCount.toString()) {
      ans.push(i + 1);
    }
  }
  return ans;
};
let s = "cbaebabacd";
let p = "abc";
let res = findAnagrams(s, p);
console.log(res);
