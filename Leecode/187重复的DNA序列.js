/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  // let set = new Set();
  // let res = [];
  // for (let i = 0; i < s.length; i++) {
  //   let subStr;
  //   if (i + 10 <= s.length - 1) {
  //     subStr = s.substring(i, i + 10);
  //   } else {
  //     subStr = s.substring(i);
  //   }

  //   if (set.has(subStr)) {
  //     if (!res.includes(subStr)) {
  //       res.push(subStr);
  //     }
  //   } else {
  //     set.add(subStr);
  //   }
  // }
  // return res;

  let set = new Set();
  let res = [];
  for (let i = 0; i <= s.length - 10; i++) {
    let subStr;
    subStr = s.substring(i, i + 10);
    if (set.has(subStr)) {
      if (!res.includes(subStr)) {
        res.push(subStr);
      }
    } else {
      set.add(subStr);
    }
  }
  return res;
};
let s = "AAAAAAAAAAAAA";
let res = findRepeatedDnaSequences(s);
console.log(res);
