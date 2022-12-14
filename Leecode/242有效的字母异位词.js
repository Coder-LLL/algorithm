/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let arr = new Array(26).fill(0);
  let baseUnicodeNum = "a".charCodeAt();
  for (let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt() - baseUnicodeNum]++;
  }
  for (let i = 0; i < t.length; i++) {
    arr[t[i].charCodeAt() - baseUnicodeNum]--;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) return false;
  }
  return true;
  //
  // let resSet = new Array(26).fill(0);
  // // 获取a的Unicode编码
  // let baseUnicodeNum = "a".charCodeAt();
  // for (let i = 0; i < s.length; i++) {
  //   resSet[s[i].charCodeAt() - baseUnicodeNum]++;
  // }
  // for (let i = 0; i < t.length; i++) {
  //   resSet[t[i].charCodeAt() - baseUnicodeNum]--;
  // }
  // for (let i = 0; i < 26; i++) {
  //   if (resSet[i] != 0) {
  //     return false;
  //   }
  // }
  // console.log(resSet);
  // return true;
};
