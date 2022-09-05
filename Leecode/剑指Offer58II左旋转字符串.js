/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  let leftStr = s.slice(n, s.length);
  let rightStr = s.slice(0, n);
  return leftStr + rightStr;
  // const length = s.length;
  // let i = 0;
  // while (i < length - n) {
  //   s = s[length - 1] + s;
  //   console.log(s);
  //   i++;
  // }
  // return s.slice(0, length);
};
let s = "abcdefg";
let k = 2;
let res = reverseLeftWords(s, k);
console.log(res);
