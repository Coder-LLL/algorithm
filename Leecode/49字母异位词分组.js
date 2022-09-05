/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function (strs) {
//   let resSet = strs.map((item) => {
//     let temArr = new Array(26).fill(0);
//     let baseUnicodeNum = "a".charCodeAt();
//     for (let char of item) {
//       temArr[char.charCodeAt() - baseUnicodeNum]++;
//     }
//     let resStr = temArr.join("-");
//     console.log(resStr);
//     return resStr;
//   });
//   console.log(resSet);
//   let resMap = new Map();
//   for (let [index, item] of resSet.entries()) {
//     if (resMap.has(item)) {
//       resMap.get(item).push(strs[index]);
//     } else {
//       resMap.set(item, [strs[index]]);
//     }
//   }
//   console.log(resMap);
//   let res = [];
//   for (let item of resMap) {
//     res.push(item[1]);
//   }
//   return res;
// };
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let str of strs) {
    let array = Array.from(str);
    array.sort();
    let key = array.toString();
    console.log(key);
    let list = map.get(key) ? map.get(key) : new Array();
    list.push(str);
    map.set(key, list);
  }
  return Array.from(map.values());
};

let strs = ["bdddddddddd", "bbbbbbbbbbc"];
let res = groupAnagrams(strs);
console.log(res);
