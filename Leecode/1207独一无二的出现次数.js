/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let map = new Map();
  arr.forEach((item) => {
    map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  });
  return map.size == new Set(map.values()).size;
};
let arr = [1, 2, 2, 1, 1, 3];
console.log(uniqueOccurrences(arr));
